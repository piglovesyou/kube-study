To run the tests for a localization, use the following command:

```
go test k8s.io/website/content/<lang>/examples
```

where `<lang>` is the two character representation of a language. For example:

```
go test k8s.io/website/content/en/examples
```

**As my personal note**

To launch dashboard, [follow the doc](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/), but in short:

1. Apply dashboard-recommended.yaml
2. kubectl proxy
3. Run `kubectl -n kubernetes-dashboard get secret $(kubectl -n kubernetes-dashboard get sa/admin-user -o jsonpath="{.secrets[0].name}") -o go-template="{{.data.token | base64decode}}"` to get a token to login 