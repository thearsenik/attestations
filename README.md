# Des attestations en quelques secondes

À lancer la première fois:

```bash
$ git clone git@github.com:cglacet/attestations.git
$ cd attestations
$ npm install
```

Puis pour générer des attestations: 

```bash
npm start -s
```

Pour configurer les attestations il suffit d'éditer le fichier [config.yml](config.yml).
Pour activer l'envoi d'emails automatiques il faut utiliser votre 
email avec un [mot de passe pour application][gmail app pwd] et éditer le 
fichier [mail-config.yml](mail-config.yml):

```yaml
user: votre.email.d.envoi@gmail.com
pass: abcdefghijklmnop
```


[gmail app pwd]: https://support.google.com/mail/answer/185833?hl=fr-FR#app-passwords
