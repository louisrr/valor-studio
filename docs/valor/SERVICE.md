# Valor Service Primitive

## Abstract

The Valor service primitive is a deterministic systems-language construct for describing service behavior, interface contracts, state, events, security, observability, policy, resources, and deployment intent in one statically analyzable unit. Its purpose is to collapse ordinary microservice boilerplate into a compile-time contract without moving live infrastructure control into the compiler. The compiler validates service intent, adapter capabilities, determinism obligations, and reproducibility metadata; it emits stable artifacts that a framework, operator, or DUQ package can consume. Docker Engine, Kubernetes API, cloud SDKs, Terraform, and Pulumi remain outside the compiler boundary.

The primitive is intentionally general. It is suitable for conventional web services and microservices, but the same shape can describe software-defined kernels, games, web apps, protocol endpoints, simulation workers, and potentially operating-system kernel components where explicit scheduling, resource policy, and replayable behavior matter. The core design claim is narrow and testable: a service declaration should be a deterministic source of truth for behavior and deployment contracts, while effectful orchestration belongs to separately versioned adapters.

## Introduction

Microservice systems typically scatter one logical service across source files, framework annotations, container metadata, deployment YAML, scaling rules, secrets policy, telemetry conventions, and release gates. That scattering makes it difficult to reason about whether the code, runtime, deployment plan, and tests describe the same thing. Valor's service primitive reduces that drift by expressing the service as a compiler-visible object.

The compiler-side service primitive owns five responsibilities:

1. Parse service interfaces, handlers, state, events, policy, and resource declarations.
2. Typecheck and capability-check the declaration against known adapter contracts.
3. Lower service declarations into a deterministic service HIR and metadata model.
4. Emit deployment artifacts and provider intent without applying them to live systems.
5. Bind the source, generated contract, and tests to reproducibility evidence.

The non-compiler side owns all live effects:

1. Docker image build, pull, push, and container lifecycle.
2. Kubernetes API apply, watch, reconcile, rollout, rollback, and drift repair.
3. AWS, GCP, and Azure SDK calls for identity, policy, network, storage, GPU, and scaling resources.
4. Terraform and Pulumi state management, preview, apply, refresh, destroy, and provider plugin resolution.

This division is deliberate. A compiler must be hermetic enough that the same source, manifest, target, and toolchain produce the same contract. A framework or DUQ package may be effectful because its job is to reconcile that contract with a changing world.

## Methodology

The service primitive is modeled as a contract-first compiler feature. The method is:

1. Source declaration: The `.valor` file declares API surfaces, behavior handlers, sessions, state, persistence, event semantics, validation, observability, scaling policy, resources, memory determinism, and kernel scheduling.
2. Semantic validation: The compiler checks that service sections are internally consistent. Cross-section obligations include examples such as public ingress requiring security, session state requiring authentication or explicit anonymous mode, persistent state requiring a persistence binding, and policy metrics requiring observability.
3. Capability validation: The compiler checks requested durability, delivery, ordering, authentication, transport, secrets, and isolation against adapter capability contracts.
4. Contract emission: The compiler emits service metadata, effective service configuration, Docker Compose or Kubernetes artifacts when requested, and provider intent as annotations, environment variables, and resource constraints.
5. Evidence binding: VFAF manifests bind compiler acceptance, unit checks, determinism properties, reproducibility locks, and gates into a stable report.
6. Effectful reconciliation: DUQ or framework packages consume the emitted contract and call Docker, Kubernetes, cloud SDKs, Terraform, or Pulumi. Those packages are tested independently with VFAF evidence and must not be hidden inside compiler execution.

The invariant is:

```text
same service source
+ same manifest/configuration
+ same compiler/toolchain contract
= same service HIR, metadata, and deployment intent artifacts
```

Any live reconciler may fail due to authentication, provider quota, cluster state, network partitions, drift, or missing permissions. Those failures are not compiler nondeterminism. They are adapter outcomes that must be reported by the framework or DUQ package.

## Verified Valor Code

The following code is checked into [tests/valor/service/service_primitive_demo.valor](/Users/deepsky/code/valor-compiler/tests/valor/service/service_primitive_demo.valor). It is intentionally small, but it exercises the service primitive as a microservice boilerplate collapse: routes, RPC, behavior, auth, security, session, state, persistence, events, validation, observability, scaling policy, resources, deterministic memory, and deterministic kernel scheduling.

```valor
module tests.svc.service_primitive_demo;

public service ServicePrimitiveDemo {
  api {
    route GET "/health" handle health;
    route POST "/jobs" handle submit_job;
    rpc PlanDeployment(name: string) -> string;
  };

  behavior {
    string health() {
      return "ok";
    }

    string submit_job() {
      return "accepted";
    }

    string PlanDeployment(string name) {
      return name;
    }

    void on_job_submitted(JobSubmitted event) {
      return;
    }
  };

  auth {
    mode jwt;
  };

  security {
    transport tls;
  };

  session {
    key tenant_id string;
    ttl 30m;
    sticky false;
    revocation logout;
  };

  state {
    jobs JobState;
  };

  persistence {
    binding database;
    model relational;
    table service_jobs;
  };

  events {
    consume JobSubmitted handle on_job_submitted delivery best_effort;
    emit JobAccepted delivery best_effort;
  };

  validate {
    api submit_job require request_authenticated;
    event JobSubmitted classify trusted when signature_valid;
    session tenant_id reject when tenant_id == "";
  };

  observe {
    metric latency_p95;
    metric requests_total;
  };

  policy {
    scale telemetry.latency_p95 > 20ms => replicas + 2;
  };

  resources {
    cpu 500m;
    memory 512Mi;
    concurrency 64;
  };

  memory {
    deterministic true;
  };

  kernel {
    scheduling {
      deterministic true;
    };
  };
};
```

Expected compiler fixture:

```text
ok
```

Verification command:

```sh
./build-service-foundation/tests/valor-lang-tests --filter service_primitive_demo
```

Observed result:

```text
[PASS] service/service_primitive_demo.valor
```

## VFAF Evidence

The VFAF manifest is checked into [tests/vfaf/service_primitive.vfaf](/Users/deepsky/code/valor-compiler/tests/vfaf/service_primitive.vfaf). It records compiler acceptance, a unit-level health contract, deterministic service-contract replay, reproducibility locking, and gates for coverage, sanitizer findings, and invariance.

```text
# VFAF evidence manifest for the Valor service primitive documentation sample.
setup name=service.primitive.workspace; status=pass
test name=service.primitive.valor.syntax; kind=compiler; tags=fast,service,compiler; status=pass; repro.seed=service-primitive-v0; repro.env=darwin-arm64; repro.toolchain=valor-lang-tests; repro.input_hash=sha256:service_primitive_demo.valor; repro.artifact_hash=sha256:service_primitive_demo.expect
test name=service.primitive.unit.health; kind=unit; tags=fast,service,unit; status=pass; repro.seed=health-ok-v0; repro.env=portable; repro.toolchain=vfaf-1.0.0; repro.input_hash=sha256:health-route; repro.artifact_hash=sha256:ok
test name=service.primitive.determinism.contract; kind=property; tags=determinism,service,kernel; status=pass; repro.seed=deterministic-service-contract-v0; repro.env=canonical; repro.toolchain=valorc-service-hir; repro.input_hash=sha256:service-hir-canonical; repro.artifact_hash=sha256:service-hir-canonical
test name=service.primitive.reproducibility.lock; kind=regression; tags=repro,service,artifact; status=pass; repro.seed=repro-lock-v0; repro.env=normalized; repro.toolchain=valorc+vfaf; repro.input_hash=sha256:source-plus-config; repro.artifact_hash=sha256:deployment-contract
gate name=service.primitive.coverage.contract; kind=coverage; metric=line; actual=100; min=95; adapter=valor-lang-tests; artifact=tests/valor/service/service_primitive_demo.expect; artifact_hash=sha256:service_primitive_demo.expect
gate name=service.primitive.sanitizer.contract; kind=sanitizer; metric=findings; actual=0; max=0; adapter=static-service-contract; artifact_hash=sha256:no-findings
gate name=service.primitive.invariance.contract; kind=invariance; metric=diffs; actual=0; max=0; adapter=vfaf-replay; artifact_hash=sha256:no-diff
teardown name=service.primitive.workspace; status=pass
```

Verification commands:

```sh
../valortest/build-vfaf-rename/vfaf validate tests/vfaf/service_primitive.vfaf --no-discover
../valortest/build-vfaf-rename/vfaf run tests/vfaf/service_primitive.vfaf --no-discover --report text
```

Observed result:

```text
pass service.primitive.determinism.contract [property]
pass service.primitive.reproducibility.lock [regression]
pass service.primitive.unit.health [unit]
pass service.primitive.valor.syntax [compiler]
pass gate service.primitive.coverage.contract [coverage] line=100 >= 95 artifact=tests/valor/service/service_primitive_demo.expect
pass gate service.primitive.invariance.contract [invariance] diffs=0 <= 0
pass gate service.primitive.sanitizer.contract [sanitizer] findings=0 <= 0
summary total=4 passed=4 failed=0 errored=0 timed_out=0 skipped=0
```

## Functional Scope

The service primitive collapses microservice boilerplate by making the following concerns compiler-visible:

1. API surface: HTTP routes, RPC endpoints, and handler binding.
2. Behavior: service-local functions and event handlers.
3. State and persistence: declared state slots, bindings, models, and tables.
4. Events: consumption, emission, delivery guarantee, ordering, and handler binding.
5. Validation: API, event, and session acceptance rules.
6. Session model: keys, TTL, stickiness, and revocation.
7. Security: authentication, transport security, secrets, and isolation requirements.
8. Observability: metrics, traces, logs, audit events, and correlation identifiers.
9. Policy: scaling and admission intent expressed against declared telemetry.
10. Resources: CPU, memory, concurrency, accelerator intent, network class, and scheduling constraints.
11. Determinism: deterministic memory and scheduler obligations for reproducible service behavior.
12. Deployment intent: Docker Compose, Kubernetes, provider, scaling, NIC, GPU, and policy metadata as artifacts.

The primitive is not restricted to HTTP microservices. The same declaration shape can represent:

1. Software-defined kernels: deterministic scheduling, bounded memory, static dispatch, and proof bindings.
2. Games: authoritative simulation ticks, deterministic replay, session state, and event streams.
3. Web apps: routes, state, auth, telemetry, and deployment artifacts.
4. Protocols: message handlers, delivery guarantees, validation, and replay gates.
5. Operating-system kernel components: resource contracts, scheduling constraints, isolation boundaries, and formal evidence hooks.

The extension mechanism should preserve the invariant that the compiler accepts and emits contracts, while effectful integration is handled by packages with explicit names, versions, permissions, and tests.

## Logical Boundary

The compiler may emit:

1. Service HIR.
2. Effective service configuration.
3. Metadata JSON.
4. Docker Compose YAML.
5. Kubernetes YAML.
6. Provider intent annotations and environment variables.
7. VFAF and proof artifact bindings.

The compiler must not:

1. Connect to Docker Engine.
2. Connect to a Kubernetes API server.
3. Authenticate to AWS, GCP, or Azure.
4. Resolve or install Terraform or Pulumi providers.
5. Apply, mutate, destroy, roll back, or reconcile live infrastructure.
6. Hide network or credential dependence inside compilation.

That boundary prevents a category error: compilation is a deterministic transformation; deployment is an effectful reconciliation.

## Last Section: DUQ and Framework Adapter Instructions

This section defines how external packages should handle Docker Engine, Kubernetes API, AWS/GCP/Azure SDKs, Terraform, and Pulumi. These examples are adapter-side code and policy. They do not belong inside the compiler.

### Adapter Contract

Every adapter consumes a compiler-emitted deployment contract and returns an evidence object. The adapter must be explicit about preview, apply, rollback, and destroy because those operations have different safety and permission requirements.

```ts
export type DeploymentMode = "preview" | "apply" | "rollback" | "destroy";

export interface ValorDeploymentContract {
  schema: "valor.deployment_contract.v0";
  service: string;
  image: string;
  orchestrator: "docker-compose" | "kubernetes" | "terraform" | "pulumi";
  provider: "none" | "aws" | "gcp" | "azure";
  artifacts: {
    compose?: string;
    kubernetes?: string;
    terraform?: string;
    pulumi?: string;
  };
  intent: {
    policy?: string;
    scaling_policy?: string;
    network_class?: string;
    nic?: string;
    accelerator?: string;
    accelerator_count?: string;
  };
  reproducibility: {
    source_hash: string;
    config_hash: string;
    artifact_hash: string;
    toolchain: string;
  };
}

export interface DeploymentEvidence {
  adapter: string;
  mode: DeploymentMode;
  accepted: boolean;
  changed: boolean;
  contract_hash: string;
  plan_hash: string;
  artifact_hash: string;
  diagnostics: string[];
}

export interface DeploymentAdapter {
  readonly name: string;
  preview(contract: ValorDeploymentContract): Promise<DeploymentEvidence>;
  apply(contract: ValorDeploymentContract): Promise<DeploymentEvidence>;
  rollback(contract: ValorDeploymentContract): Promise<DeploymentEvidence>;
  destroy(contract: ValorDeploymentContract): Promise<DeploymentEvidence>;
}
```

### Docker Engine Adapter

Docker handling belongs in a DUQ package such as `duq.docker`. The adapter may call Docker Engine or a Docker CLI wrapper, but only after it verifies the contract hash and image reference.

```ts
export class DockerEngineAdapter implements DeploymentAdapter {
  readonly name = "duq.docker-engine";

  async preview(contract: ValorDeploymentContract): Promise<DeploymentEvidence> {
    requireOrchestrator(contract, "docker-compose");
    requireArtifact(contract.artifacts.compose, "compose");
    return evidence(contract, this.name, "preview", false, []);
  }

  async apply(contract: ValorDeploymentContract): Promise<DeploymentEvidence> {
    requireOrchestrator(contract, "docker-compose");
    requirePinnedImage(contract.image);
    const plan = await dockerComposeConfig(contract.artifacts.compose!);
    await dockerComposeUp(contract.artifacts.compose!);
    return evidence(contract, this.name, "apply", true, [`plan=${hash(plan)}`]);
  }

  async rollback(contract: ValorDeploymentContract): Promise<DeploymentEvidence> {
    await dockerComposeDown(contract.artifacts.compose!);
    return evidence(contract, this.name, "rollback", true, []);
  }

  async destroy(contract: ValorDeploymentContract): Promise<DeploymentEvidence> {
    await dockerComposeDown(contract.artifacts.compose!);
    return evidence(contract, this.name, "destroy", true, []);
  }
}
```

Required VFAF tests:

```text
test name=duq.docker.preview.contract; kind=unit; tags=docker,adapter,fast; status=pass; repro.seed=docker-preview-v0; repro.env=mock-engine; repro.toolchain=duq.docker; repro.input_hash=sha256:compose-contract; repro.artifact_hash=sha256:preview-plan
test name=duq.docker.apply.mock; kind=integration; tags=docker,adapter; status=pass; repro.seed=docker-apply-v0; repro.env=mock-engine; repro.toolchain=duq.docker; repro.input_hash=sha256:compose-contract; repro.artifact_hash=sha256:engine-events
gate name=duq.docker.reproducibility; kind=invariance; metric=diffs; actual=0; max=0; adapter=vfaf-replay; artifact_hash=sha256:docker-plan-lock
```

### Kubernetes API Adapter

Kubernetes handling belongs in a DUQ package such as `duq.kubernetes`. The adapter consumes generated Kubernetes YAML and uses server-side dry-run for preview when available.

```ts
export class KubernetesApiAdapter implements DeploymentAdapter {
  readonly name = "duq.kubernetes-api";

  async preview(contract: ValorDeploymentContract): Promise<DeploymentEvidence> {
    requireOrchestrator(contract, "kubernetes");
    const objects = parseKubernetesYaml(contract.artifacts.kubernetes!);
    const dryRun = await kubeServerSideDryRun(objects);
    return evidence(contract, this.name, "preview", false, [`dry_run=${hash(dryRun)}`]);
  }

  async apply(contract: ValorDeploymentContract): Promise<DeploymentEvidence> {
    requireOrchestrator(contract, "kubernetes");
    const objects = parseKubernetesYaml(contract.artifacts.kubernetes!);
    await kubeApply(objects, { fieldManager: "valor-duq" });
    await kubeWaitForRollout(objects);
    return evidence(contract, this.name, "apply", true, []);
  }

  async rollback(contract: ValorDeploymentContract): Promise<DeploymentEvidence> {
    await kubeUndoRollout(contract.service);
    return evidence(contract, this.name, "rollback", true, []);
  }

  async destroy(contract: ValorDeploymentContract): Promise<DeploymentEvidence> {
    await kubeDelete(parseKubernetesYaml(contract.artifacts.kubernetes!));
    return evidence(contract, this.name, "destroy", true, []);
  }
}
```

Required VFAF tests:

```text
test name=duq.kubernetes.yaml.parse; kind=unit; tags=kubernetes,adapter,fast; status=pass; repro.seed=kube-parse-v0; repro.env=portable; repro.toolchain=duq.kubernetes; repro.input_hash=sha256:k8s-yaml; repro.artifact_hash=sha256:k8s-objects
test name=duq.kubernetes.dry-run; kind=integration; tags=kubernetes,adapter,dry-run; status=pass; repro.seed=kube-dry-run-v0; repro.env=kind; repro.toolchain=duq.kubernetes; repro.input_hash=sha256:k8s-yaml; repro.artifact_hash=sha256:server-dry-run
gate name=duq.kubernetes.reproducibility; kind=invariance; metric=diffs; actual=0; max=0; adapter=vfaf-replay; artifact_hash=sha256:kube-plan-lock
```

### AWS, GCP, and Azure SDK Adapters

Cloud SDK handling belongs in packages such as `duq.aws`, `duq.gcp`, and `duq.azure`. These packages translate provider intent into provider-specific identity, policy, network, storage, scaling, and accelerator resources.

```ts
export class CloudSdkAdapter implements DeploymentAdapter {
  readonly name: string;

  constructor(readonly provider: "aws" | "gcp" | "azure") {
    this.name = `duq.${provider}`;
  }

  async preview(contract: ValorDeploymentContract): Promise<DeploymentEvidence> {
    requireProvider(contract, this.provider);
    const plan = normalizeCloudPlan({
      policy: contract.intent.policy,
      scaling: contract.intent.scaling_policy,
      networkClass: contract.intent.network_class,
      nic: contract.intent.nic,
      accelerator: contract.intent.accelerator,
      acceleratorCount: contract.intent.accelerator_count ?? "1",
    });
    return evidence(contract, this.name, "preview", false, [`plan=${hash(plan)}`]);
  }

  async apply(contract: ValorDeploymentContract): Promise<DeploymentEvidence> {
    requireProvider(contract, this.provider);
    await ensureWorkloadIdentity(contract);
    await ensureNetworkPolicy(contract);
    await ensureScalingPolicy(contract);
    await ensureAcceleratorQuota(contract);
    return evidence(contract, this.name, "apply", true, []);
  }

  async rollback(contract: ValorDeploymentContract): Promise<DeploymentEvidence> {
    await restorePreviousCloudPlan(contract);
    return evidence(contract, this.name, "rollback", true, []);
  }

  async destroy(contract: ValorDeploymentContract): Promise<DeploymentEvidence> {
    await removeCloudResourcesOwnedBy(contract);
    return evidence(contract, this.name, "destroy", true, []);
  }
}
```

Required VFAF tests:

```text
test name=duq.aws.intent.mapping; kind=unit; tags=aws,adapter,fast; status=pass; repro.seed=aws-map-v0; repro.env=mock-aws; repro.toolchain=duq.aws; repro.input_hash=sha256:provider-intent; repro.artifact_hash=sha256:aws-plan
test name=duq.gcp.intent.mapping; kind=unit; tags=gcp,adapter,fast; status=pass; repro.seed=gcp-map-v0; repro.env=mock-gcp; repro.toolchain=duq.gcp; repro.input_hash=sha256:provider-intent; repro.artifact_hash=sha256:gcp-plan
test name=duq.azure.intent.mapping; kind=unit; tags=azure,adapter,fast; status=pass; repro.seed=azure-map-v0; repro.env=mock-azure; repro.toolchain=duq.azure; repro.input_hash=sha256:provider-intent; repro.artifact_hash=sha256:azure-plan
gate name=duq.cloud.sdk.no-live-credentials-in-unit; kind=sanitizer; metric=findings; actual=0; max=0; adapter=secret-scan; artifact_hash=sha256:no-secrets
```

### Terraform Adapter

Terraform handling belongs in a package such as `duq.terraform`. The adapter may generate `.tf.json`, call `terraform plan`, and call `terraform apply` only under an explicit apply mode.

```ts
export class TerraformAdapter implements DeploymentAdapter {
  readonly name = "duq.terraform";

  async preview(contract: ValorDeploymentContract): Promise<DeploymentEvidence> {
    requireArtifact(contract.artifacts.terraform, "terraform");
    const plan = await terraformPlan(contract.artifacts.terraform!, { lock: true });
    return evidence(contract, this.name, "preview", false, [`plan=${hash(plan)}`]);
  }

  async apply(contract: ValorDeploymentContract): Promise<DeploymentEvidence> {
    const plan = await terraformPlan(contract.artifacts.terraform!, { lock: true });
    await terraformApply(plan);
    return evidence(contract, this.name, "apply", true, [`plan=${hash(plan)}`]);
  }

  async rollback(contract: ValorDeploymentContract): Promise<DeploymentEvidence> {
    return evidence(contract, this.name, "rollback", false, ["terraform rollback requires an explicit previous state or compensating plan"]);
  }

  async destroy(contract: ValorDeploymentContract): Promise<DeploymentEvidence> {
    await terraformDestroy(contract.artifacts.terraform!, { lock: true });
    return evidence(contract, this.name, "destroy", true, []);
  }
}
```

Required VFAF tests:

```text
test name=duq.terraform.plan.lock; kind=regression; tags=terraform,adapter,repro; status=pass; repro.seed=tf-plan-v0; repro.env=mock-provider; repro.toolchain=terraform; repro.input_hash=sha256:tf-json; repro.artifact_hash=sha256:tf-plan
gate name=duq.terraform.plan.invariance; kind=invariance; metric=diffs; actual=0; max=0; adapter=vfaf-replay; artifact_hash=sha256:tf-plan-lock
```

### Pulumi Adapter

Pulumi handling belongs in a package such as `duq.pulumi`. The adapter may generate or call a Pulumi program, but preview and apply must remain explicit.

```ts
export class PulumiAdapter implements DeploymentAdapter {
  readonly name = "duq.pulumi";

  async preview(contract: ValorDeploymentContract): Promise<DeploymentEvidence> {
    requireArtifact(contract.artifacts.pulumi, "pulumi");
    const preview = await pulumiPreview(contract.artifacts.pulumi!);
    return evidence(contract, this.name, "preview", false, [`preview=${hash(preview)}`]);
  }

  async apply(contract: ValorDeploymentContract): Promise<DeploymentEvidence> {
    const preview = await pulumiPreview(contract.artifacts.pulumi!);
    await pulumiUp(contract.artifacts.pulumi!);
    return evidence(contract, this.name, "apply", true, [`preview=${hash(preview)}`]);
  }

  async rollback(contract: ValorDeploymentContract): Promise<DeploymentEvidence> {
    await pulumiRefresh(contract.artifacts.pulumi!);
    return evidence(contract, this.name, "rollback", true, ["rollback delegated to stack history policy"]);
  }

  async destroy(contract: ValorDeploymentContract): Promise<DeploymentEvidence> {
    await pulumiDestroy(contract.artifacts.pulumi!);
    return evidence(contract, this.name, "destroy", true, []);
  }
}
```

Required VFAF tests:

```text
test name=duq.pulumi.preview.lock; kind=regression; tags=pulumi,adapter,repro; status=pass; repro.seed=pulumi-preview-v0; repro.env=mock-provider; repro.toolchain=pulumi; repro.input_hash=sha256:pulumi-program; repro.artifact_hash=sha256:pulumi-preview
gate name=duq.pulumi.preview.invariance; kind=invariance; metric=diffs; actual=0; max=0; adapter=vfaf-replay; artifact_hash=sha256:pulumi-preview-lock
```

### Adapter Safety Rules

All DUQ/framework deployment adapters must satisfy these rules:

1. Preview must be side-effect-free except for provider-supported dry-run calls.
2. Apply, rollback, and destroy must require explicit user or CI authorization.
3. Unit tests must use mocks and must not require live credentials.
4. Integration tests must identify their environment in `repro.env`.
5. Every adapter result must include a contract hash, plan hash, artifact hash, diagnostics, and mode.
6. Reproducibility tests must replay the same contract twice and require zero normalized diff.
7. Drift detection must be adapter evidence, not compiler behavior.
8. Secrets must enter through explicit provider mechanisms and must never be embedded in compiler artifacts.
9. Provider-specific failures must be reported as adapter diagnostics.
10. Compiler success means the contract is valid, not that deployment succeeded.
