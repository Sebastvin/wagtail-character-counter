from __future__ import unicode_literals

from django.conf import settings
from django.utils.html import format_html, format_html_join
from wagtail import hooks


@hooks.register('insert_editor_js')
def editor_js():
    js_files = ['character_counter.js']
    js_includes = format_html_join(
        '\n',
        '<script src="{0}{1}"></script>',
        ((settings.STATIC_URL, filename) for filename in js_files))

    return js_includes + format_html("""
        <script></script>""")
