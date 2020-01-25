# Dopo il checkout installazione

installa i pacchetti npm

```bash
npm install
```

Crea il virtualenv di python

```bash
virtualenv env
```

installa i pacchetti python

```bash
pip install -r requirements.txt
```

Crea le migrazioni nel DB

```bash
python3 manage.py migrate
```

Opzionale: crea uno superuser per accedere al pannello di controllo

```bash
python3 manage.py createsuperuser
```

# Sviluppo

entra nel progetto e lancia

```bash
npm start
```

apri un'altro terminale e lancia

```bash
source env/bin/activate
python3 manage.py runserver
```

Per pubblicare, preparare il commit con GIT ed eseguire:

```bash
git push heroku master
```

# Produzione

il progetto in: /home/totem/totem

inviare le modifiche sul repository github e dalla folder del progetto lanciare:

```bash
git pull
```

## Postgres

accesso

```bash
sudo -u postgres psq
```

esci con:

```bash
\q
```

## Gunicorn

verifica stato

```bash
sudo systemctl status gunicorn.socket
```

logs

```bash
sudo journalctl -u gunicorn.socket
```

reload

```bash
sudo systemctl daemon-reload
sudo systemctl restart gunicorn
```

## Nginx

test configuration

```bash
sudo nginx -t
```

restart

```bash
sudo systemctl restart nginx
```

## Docs

Set up django app on Digital Ocean:
https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-18-04

Favicon generator
https://realfavicongenerator.net/
