# Des attestations en quelques secondes

À lancer la première fois:

```bash
$ git clone https://github.com/thearsenik/attestations
$ cd attestations
$ npm install
```

Lancer le serveur:

```bash
npm run serve
```

Pour configurer les attestations il suffit d'ajouter des fichiers tel que [config-exemple.yml](config-exemple.yml).
Pour activer l'envoi d'emails automatiques il faut utiliser votre 
email avec un [mot de passe pour application][gmail app pwd] et éditer le 
fichier [mail-config.yml](mail-config.yml):

```yaml
user: votre.email.d.envoi@gmail.com
pass: abcdefghijklmnop
```

## Référence

Ce repo est un fork de [https://github.com/cglacet/attestations](https://github.com/cglacet/attestations)