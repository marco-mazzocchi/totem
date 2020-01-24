Fonte primaria: https://dev.to/shakib609/deploy-your-django-react-js-app-to-heroku-2bck

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
