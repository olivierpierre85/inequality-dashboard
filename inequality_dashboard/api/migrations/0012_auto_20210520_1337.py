# Generated by Django 3.1.7 on 2021-05-20 13:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_indicator_percentile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='indicator',
            name='percentile',
            field=models.TextField(default='', max_length=30),
        ),
    ]
