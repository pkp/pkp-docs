# Personalizando o Tema do _Backend_ Editorial
Modificar a aparência do _backend_ editorial no OJS 3.0+ ou no OMP 1.2+ é sensivelmente mais difícil e carrega em si riscos maiores de quebrar a aplicação. Personalizar o tema do _backend_ editorial é algo que não deve ser realizado sem o auxílio de um desenvolver experiente  e com o entendimento total dos conceitos descritos neste guia.

Ainda que não seja bem documentado, os Temas podem inserir seus _templates_ e estilos no _backend_ tão facilmente quando no _frontend_. Todos os templates dentro do diretório `templates` pode ser sobrescritos. E você pode adicionar folhas de estilos ao _backend_ ao passar um argumento de `context` ao método `addStyle`.
```php
    public function init() {
        $this->addStyle('meu-estilo-personalizado', 'styles/index.less', array( 'context' => 'backend' );
    }
```

A folha de estilo principal do _backend_ editorial tem o nome de `pkpLib`. Você pode modificar estes estilos ao passar suas próprias variáveis.

```php
    public function init() {
        $this->modifyStyle('pkpLib', array('addLess' => array('styles/index.less')));
    }
```

Recomendamos que você teste completamente as alterações feitas.  O _backend_ editorial é uma aplicação grande e complexa. Alterações em estilo ou _script_ podem acarretar em efeitos indesejados que são difíceis de rastrear sem um conhecimento profundo do sistema.

Um tema não é o lugar mais recomendado para estender alguma funcionalidade do sistema. Existe uma API de Plugins mais abrangente e mais apropriada para estender a aplicação.

Recomendamos que você mantenha os ajustes de cores simples para adaptar o backend editorial à sua identidade visual em todas as circunstâncias, exceto nas mais excepcionais.