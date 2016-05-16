# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-05-16 05:52
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20160516_1443'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='area',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.Area'),
        ),
        migrations.AlterField(
            model_name='course',
            name='course_type',
            field=models.CharField(blank=True, choices=[('MA', '전공 필수'), ('EL', '전공 선택')], max_length=2, null=True),
        ),
    ]
