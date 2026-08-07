# Building Services

A Valor `service` is a compiler-visible contract for an API and its operational
requirements. It can describe handlers, authentication, security, state,
events, validation, observability, policies, resources, and deployment intent
without making compilation contact live infrastructure.

## Declare a service

This minimal public service exposes a health route. Public ingress requires
both authentication and transport security, so the example declares them
explicitly.

```valor
module app.health;

public service HealthService {
    api {
        route GET "/health" handle health;
    };

    behavior {
        string health() {
            return "ok";
        }
    };

    auth {
        mode jwt;
    };

    security {
        transport tls;
    };

    observe {
        metric requests_total;
    };

    resources {
        cpu 250m;
        memory 256Mi;
        concurrency 32;
    };
};
```

Save it as `health.valor`. For a larger example with sessions, persistence,
events, validation, scaling policy, deterministic memory, and kernel
scheduling, see
[`tests/valor/service/service_primitive_demo.valor`](../tests/valor/service/service_primitive_demo.valor).

## Configure the deployment target

Use `valor.json` to select the container and deployment defaults:

```json
{
  "container": {
    "image": "ghcr.io/acme/health:v1",
    "registry": "ghcr.io",
    "repository": "acme/health",
    "tag": "v1"
  },
  "deployment": {
    "orchestrator": "kubernetes",
    "cloud": "aws",
    "options": {
      "namespace": "production",
      "replicas": "3"
    }
  }
}
```

The same settings can be overridden from the CLI with `--deployment`,
`--cloud`, `--container-image`, and
`--service-option deployment.key=value`.

## Emit deployment artifacts

Build the service and emit Kubernetes YAML:

```bash
valorc build health.valor --out health \
  --out-dir build/valor \
  --emit-deployment build/deploy \
  --deployment-format kubernetes
```

For Docker Compose, change the final option:

```bash
valorc build health.valor --out health \
  --out-dir build/valor \
  --emit-deployment build/deploy \
  --deployment-format docker-compose
```

The compiler also writes stable `service_manifest.json` and
`effective_service_config.json` metadata alongside compiled module artifacts.
Deployment YAML is written beneath the directory passed to
`--emit-deployment`, using the module path in the file name.

## Choose a driver

Compilation produces a deterministic contract; a deployment driver performs
the effectful operation:

| Driver | Consumes | Performs |
|---|---|---|
| `duq.docker` | Docker Compose YAML | Image verification and container preview/apply/rollback/destroy |
| `duq.kubernetes` | Kubernetes YAML | Server dry-run, apply, rollout, rollback, and deletion |
| `duq.aws` | AWS provider intent | AWS identity, policy, network, storage, scaling, and accelerator mapping |
| `duq.gcp` | GCP provider intent | GCP identity, policy, network, storage, scaling, and accelerator mapping |
| `duq.azure` | Azure provider intent | Azure identity, policy, network, storage, scaling, and accelerator mapping |

Docker/Kubernetes and cloud drivers are separately versioned adapters; the
compiler does not connect to their engines or APIs. Always preview a deployment
contract before an explicitly authorized apply, rollback, or destroy operation.

See **[Service Primitive](../SERVICE.md)** for the complete declaration,
deployment contract, driver examples, evidence requirements, and safety rules.
You can also return to **[Using invariants](invariants.md)** or continue to
**[Language Basics](../basics.md)**.
