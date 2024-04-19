# Acerca del módulo ROR

El módulo ROR para OJS y OPS 3 permite a los autores/as encontrar y añadir su afiliación de la lista de organizaciones mantenidas por [Research Organization Registry (ROR)](https://ror.org). Cuando un autor/a empieza a escribir su afiliación, las organizaciones incluidas en ROR se obtendrán y se sugerirán automáticamente. Esto es especialmente útil para revistas multilingües porque se puede escribir el nombre de la organización en cualquier idioma y ROR proporcionará la organización correspondiente, ya que sus registros incluyen el nombre de cada organización en diferentes idiomas, así como las variantes y los acrónimos.

El módulo ROR se incluye en la galería de módulos de OJS desde OJS 3.2. Para la instalación del módulo ROR en OJS 3.2, consulte [Instalación del módulo ROR](#Installing-the-ror-plugin).

El módulo ROR se puede utilizar en OJS 3.x y OPS 3.x. No es compatible con OMP.

![Módulo ROR en acción desde la entrada de la organización hasta la interfaz de usuario/a.](assets/ror-plugin.gif)

## Instalación del módulo ROR

 1. Iniciar sesión como administrador/a o gestor/a de revista
 1. Seleccionar _Ajustes -> Sitio web -> Módulos_
 1. Hacer clic en _Galería de módulos_
 1. Seleccionar y hacer clic en el módulo _Research Organization Registry (ROR)_
 1. Hacer clic en _Instalar_ en el cuadro de diálogo abierto y esperar a que la _instalación_ termine.
 1.  Hacer clic en el botón _Activar_. El módulo ROR ya estará instalado en los módulos genéricos.

**Este paso _`solo`_ es necesario si se está usando una versión de OJS 3.2 anterior a `30.11.2020` o si _`no`_ se está utilizando el `tema predeterminado`**.

 *  Localizar el archivo `templates/frontend/objects/article_details.tpl`
 *   Encontrar el código siguiente en la plantilla
 ```xml
<span class="affiliation">
    {$author->getLocalizedData('affiliation')|escape}
</span>
```
*  Añadir la variable de plantilla de icono ROR
```xml
<span class="affiliation">
    {$author->getLocalizedData('affiliation')|escape}
    {if $author->getData('rorId')}
        <a href="{$author->getData('rorId')|escape}">{$rorIdIcon}</a>
    {/if}
</span>
```

![Cómo el módulo ROR muestra las afiliaciones de autor/a en la interfaz de usuario/a.](assets/ror-display.png)

















