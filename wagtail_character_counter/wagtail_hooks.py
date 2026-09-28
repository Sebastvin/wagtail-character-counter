from django.templatetags.static import static
from django.utils.html import format_html
from django.utils.safestring import SafeString
from wagtail import hooks


@hooks.register("insert_editor_js")
def editor_js() -> SafeString:
    return format_html('<script src="{}"></script>', static("character_counter.js"))
