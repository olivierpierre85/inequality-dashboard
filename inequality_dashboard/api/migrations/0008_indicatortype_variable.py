# Generated by Django 3.1.7 on 2021-05-20 12:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20210520_1254'),
    ]

    operations = [
        migrations.AddField(
            model_name='indicatortype',
            name='variable',
            field=models.CharField(default='', max_length=256),
        ),
    ]
