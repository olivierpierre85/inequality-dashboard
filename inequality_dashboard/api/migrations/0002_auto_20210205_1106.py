# Generated by Django 3.1.5 on 2021-02-05 11:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='testdata',
            old_name='year2',
            new_name='year3',
        ),
    ]
