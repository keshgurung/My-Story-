# Generated by Django 3.2.9 on 2021-12-03 18:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('stories', '0002_story_genre'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('stories', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stories.story')),
            ],
        ),
    ]