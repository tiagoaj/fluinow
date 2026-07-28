# Deploy da Fluinow no Portainer Swarm

O site roda como uma aplicação Next.js standalone na porta `3000`. O arquivo
`docker-stack.yml` pressupõe que o cluster já possui Traefik, uma rede overlay
externa e um certificate resolver do Let's Encrypt.

## 1. DNS

Crie estes registros apontando para o IP público do servidor/cluster:

- `A` para `fluinow.com.br`
- `A` ou `CNAME` para `www.fluinow.com.br`

## 2. Publicação automática no GHCR

O workflow `.github/workflows/publish-image.yml` compila e publica:

```text
ghcr.io/tiagoaj/fluinow:latest
ghcr.io/tiagoaj/fluinow:sha-COMMIT
```

Ele é executado automaticamente a cada push para `main`.

Se a imagem permanecer privada, cadastre `ghcr.io` em **Registries** no
Portainer. Use o usuário `tiagoaj` e um GitHub Personal Access Token Classic
com a permissão `read:packages`.

## 3. Criar a Stack no Portainer

1. Acesse **Stacks → Add stack**.
2. Escolha **Web editor** e cole o conteúdo de `docker-stack.yml`.
3. Em **Environment variables**, configure:

```text
FLUINOW_IMAGE=ghcr.io/tiagoaj/fluinow:latest
TRAEFIK_NETWORK=NOME_DA_REDE_OVERLAY_DO_TRAEFIK
TRAEFIK_CERTRESOLVER=NOME_DO_RESOLVER_LETSENCRYPT
```

4. Se o registry for privado, habilite o acesso às credenciais do registry.
5. Clique em **Deploy the stack**.

## 4. Verificações

Confira:

- as duas réplicas do serviço em estado `running`;
- o healthcheck como `healthy`;
- o certificado TLS emitido pelo Traefik;
- `https://fluinow.com.br`;
- o redirecionamento de HTTP para HTTPS.

## Servidor sem Traefik

Se o servidor usa Nginx Proxy Manager, Caddy ou outro proxy, remova os labels
`traefik.*`, publique a porta `3000` e aponte o proxy para o serviço. Não
publique a porta diretamente na internet sem o proxy HTTPS.
