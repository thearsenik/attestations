# Des attestations en quelques secondes

## Installation et configuration
```bash
$ git clone https://github.com/thearsenik/attestations
$ cd attestations
$ npm install
```

Pour configurer les attestations il suffit d'ajouter des fichiers tel que [config-exemple.yml](config-exemple.yml).
Pour activer l'envoi d'emails automatiques il faut utiliser votre 
email avec un [mot de passe pour application][gmail app pwd] et éditer le 
fichier [mail-config.yml](mail-config.yml):

```yaml
user: votre.email.d.envoi@gmail.com
pass: abcdefghijklmnop
```

## Lancer le serveur

```bash
npm run serve
```

## Générer une attestation
Il suffit d'ouvrir un navigateur à l'adresse: ```http://<ip_ou_domaine>:3000/<personne>/<motif>```
Où:
  - *personne* correspond au suffixe du fichier de configuration à utiliser
  - *motif* correspond à l'un des motif suivant:
    - travail
    - achats
    - sante
    - famille
    - handicap
    - sport_animaux
    - convocation
    - missions
    - enfants
  
Exemple:
[http://localhost:3000/exemple/travail](http://localhost:3000/exemple/travail)


## Référence

Ce repo est un fork de [https://github.com/cglacet/attestations](https://github.com/cglacet/attestations)
