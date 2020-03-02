# Actualizar su versión de OJS

Este capítulo cubre los aspectos técnicos de actualizar su versión de OJS 3.X. Planificar la actualización contribuirá en gran medida a que este sea un proceso exitoso. Antes de realizar cualquier actualización, es importante asegurarse de que su servidor cumpla con los [requisitos de OJS 3.X](https://pkp.sfu.ca/ojs/README) y que su instalación de OJS 2.x no sea demasiado antigua para actualizarse a OJS 3.X. Después de determinar que su servidor cumple con los requisitos, puede continuar con la actualización a OJS 3.X.

## Paso 1: realice una actualización de "sandbox"

Es importante realizar primero una actualización de prueba. Para hacer esto, deberá realizar una copia completa de su revista OJS 2.x que incluya la base de datos y el área de archivos. Siga las instrucciones de actualización de esa copia. Las instrucciones oficiales de actualización se pueden encontrar directamente en la [documentación de ACTUALIZACIÓN](https://pkp.sfu.ca/ojs/UPGRADE). Aquí encontrará instrucciones para actualizar desde varias versiones de OJS 2.x.

Haga que su personal técnico se familiarice con los pasos de actualización incluidos en los archivos de descarga de la última versión de OJS 3, disponible en el sitio web de PKP.

Cree un "sandbox" donde pueda realizar una actualización de prueba. Este también es un buen momento para hacer una copia de seguridad de su instalación.

Para hacer un "sandbox" necesitará desempaquetar la nueva versión de OJS 3 en una nueva área de su servidor web (donde no interferirá con su instalación existente de OJS 2) y crear copias de su base de datos, de su directorio de archivos y de su directorio público para usarlos en el "sandbox" de OJS 3.

Realizar una actualización de "sandbox" le dará una indicación de cuánto tiempo llevará el proceso de actualización y si se requerirá una limpieza o ajuste adicional. También puede darle la oportunidad de recorrer algunas de las nuevas funciones de OJS 3.

Para evitar que se acceda accidentalmente a su "sandbox" OJS 3 o que se indexe, recomendamos limitar el acceso a él solo a usuarios/as autorizados a través de una directiva NoIndex o a una autenticación básica proporcionada por su servidor web. Por lo general, ambos se logran utilizando un archivo .htaccess, pero los detalles dependerán de la configuración de su servidor web.

También es posible que desee evitar que la instalación "sandbox" de OJS 3 envíe correos electrónicos a personas reales mientras completa su evaluación y revisión. Puede hacer esto cambiando las direcciones de correo electrónico en su base de datos "sandbox" usando esta instrucción SQL:

`UPDATE users SET email = CONCAT(email, 'test');`

A continuación, edite su archivo de configuración `config.inc.php` en la instalación "sandbox" para agregar los detalles de la instalación existente de OJS 2, pero asegúrese de especificar las copias de su base de datos y el directorio de archivos en lugar de las versiones de producción en uso de la instalación OJS 2 existente. Siga las instrucciones en `docs/UPGRADE` para actualizar la base de datos. (Esto también reorganizará su directorio de archivos, ¡por eso es tan importante hacer una copia!)

Consulte la sección [Solución de problemas](#troubleshooting) de más abajo para ver los posibles errores que se puede encontrar durante el proceso de actualización.

Si la actualización se completa con éxito, inicie sesión en la instalación "sandbox" de OJS 3 y revise que todos los envíos y archivos están presentes y que todo se muestra correctamente.

Una vez que esté satisfecho con la actualización de prueba, continúe con el siguiente paso.

## Paso 2: lleve a cabo la actualización

Ahora que ha probado la actualización "sandbox" y está satisfecho con los resultados, es hora de actualizar su instalación. El día establecido, a la hora establecida, desconecte su revista OJS 2.x y siga las instrucciones en `docs/UPGRADE` para actualizar el software. Para hacerlo, repita los pasos de actualización con su instalación de producción. Antes de actualizar su instalación, realice una copia de seguridad completa de su base de datos y de su carpeta de 'archivos'. Si el proceso de actualización falla, necesitará recuperarlos de la copia de seguridad antes de continuar. Las instrucciones oficiales de actualización se pueden encontrar directamente en la [documentación de ACTUALIZACIÓN](https://pkp.sfu.ca/ojs/UPGRADE). Cuando la actualización se complete con éxito, informe a los editores/as para que puedan iniciar sesión y comenzar a trabajar.

Si su instalación de OJS aún no tiene la carpeta 'archivos' ubicada fuera de la instalación de OJS accesible desde la web, muévala ahora. El incumplimiento de este requisito es el único riesgo de seguridad significativo al que enfrentan las revistas OJS. Consulte la sección "Configuración recomendada" del documento README incluido en sus archivos de descarga OJS para más detalles.

## Solución de problemas

### Mensajes de error fatal durante el proceso de actualización

Esto generalmente indica que hubo una inconsistencia de datos en su base de datos OJS 2.x; busque en el [Foro de la comunidad PKP](https://forum.pkp.sfu.ca/) mensajes similares.

### Advertencias del tipo “PHP Notice: unserialize(): Error at offset…”

Esto indica que puede haber cambiado accidentalmente la configuración del paquete de caracteres en su `config.inc.php` o al crear su base de datos "sandbox".

### Mensaje de error "El comando tar no está disponible. Configúrelo correctamente en su 'config.inc.php'”

Este es un mensaje de error común que puede encontrarse al intentar habilitar complementos. En el [Foro de la comunidad PKP](https://forum.pkp.sfu.ca/) hay algunas sugerencias para solucionarlo.

### Error de actualización de la base de datos

Esto generalmente indica que algunas cosas no coinciden o están duplicadas. Debería echar un vistazo a la base de datos existente y asegurarse de que todo esté igual o no se haya duplicado.

Para obtener recursos de actualización adicionales, consulte la sección [Recursos adicionales](./resources.md) al final de esta guía.
