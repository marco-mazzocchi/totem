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

# Docs

Set up django app on Digital Ocean:
https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-18-04
