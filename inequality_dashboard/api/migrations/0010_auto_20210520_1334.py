# Generated by Django 3.1.7 on 2021-05-20 13:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20210520_1258'),
    ]

    operations = [
        migrations.RenameField(
            model_name='indicatortype',
            old_name='variable',
            new_name='stat_variable',
        ),
    ]
