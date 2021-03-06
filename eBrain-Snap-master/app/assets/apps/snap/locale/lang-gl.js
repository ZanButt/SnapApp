/*

    lang-gl.js

    galician translation for SNAP!

    written by tecnoloxia

    CC By 2016 by tecnoloxia

    This file is part of Snap!.

    Snap! is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of
    the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.



    Note to Translators:
    --------------------
    At this stage of development, Snap! can be translated to any LTR language
    maintaining the current order of inputs (formal parameters in blocks).

    Translating Snap! is easy:


    1. Download

    Download the sources and extract them into a local folder on your
    computer:

        <http://snap.berkeley.edu/snapsource/snap.zip>

    Use the German translation file (named 'lang-de.js') as template for your
    own translations. Start with editing the original file, because that way
    you will be able to immediately check the results in your browsers while
    you're working on your translation (keep the local copy of snap.html open
    in your web browser, and refresh it as you progress with your
    translation).


    2. Edit

    Edit the translation file with a regular text editor, or with your
    favorite JavaScript editor.

    In the first non-commented line (the one right below this
    note) replace "de" with the two-letter ISO 639-1 code for your language,
    e.g.

        fr - French => SnapTranslator.dict.fr = {
        it - Italian => SnapTranslator.dict.it = {
        pl - Polish => SnapTranslator.dict.pl = {
        pt - Portuguese => SnapTranslator.dict.pt = {
        es - Spanish => SnapTranslator.dict.es = {
        el - Greek => => SnapTranslator.dict.el = {
	gl - Galician  => => SnapTranslator.dict.gl = {

    etc. (see <http://en.wikipedia.org/wiki/ISO_639-1>)


    3. Translate

    Then work through the dictionary, replacing the German strings against
    your translations. The dictionary is a straight-forward JavaScript ad-hoc
    object, for review purposes it should be formatted as follows:

        {
            'English string':
                'Translation string',
            'last key':
        }       'last value'

    and you only edit the indented value strings. Note that each key-value
    pair needs to be delimited by a comma, but that there shouldn't be a comma
    after the last pair (again, just overwrite the template file and you'll be
    fine).

    If something doesn't work, or if you're unsure about the formalities you
    should check your file with

        <http://JSLint.com>

    This will inform you about any missed commas etc.


    4. Accented characters

    Depending on which text editor and which file encoding you use you can
    directly enter special characters (e.g. Umlaut, accented characters) on
    your keyboard. However, I've noticed that some browsers may not display
    special characters correctly, even if other browsers do. So it's best to
    check your results in several browsers. If you want to be on the safe
    side, it's even better to escape these characters using Unicode.

        see: <http://0xcc.net/jsescape/>


    5. Block specs:

    At this time your translation of block specs will only work
    correctly, if the order of formal parameters and their types
    are unchanged. Placeholders for inputs (formal parameters) are
    indicated by a preceding % prefix and followed by a type
    abbreviation.

    For example:

        'say %s for %n secs'

    can currently not be changed into

        'say %n secs long %s'

    and still work as intended.

    Similarly

        'point towards %dst'

    cannot be changed into

        'point towards %cst'

    without breaking its functionality.


    6. Submit

    When you're done, rename the edited file by replacing the "de" part of the
    filename with the two-letter ISO 639-1 code for your language, e.g.

        fr - French => lang-fr.js
        it - Italian => lang-it.js
        pl - Polish => lang-pl.js
        pt - Portuguese => lang-pt.js
        es - Spanish => lang-es.js
        el - Greek => => lang-el.js
	gl - Galician => => lang-gl.js

    and send it to me for inclusion in the official Snap! distribution.
    Once your translation has been included, Your name will the shown in the
    "Translators" tab in the "About Snap!" dialog box, and you will be able to
    directly launch a translated version of Snap! in your browser by appending

        lang:xx

    to the URL, xx representing your translations two-letter code.


    7. Known issues

    In some browsers accents or ornaments located in typographic ascenders
    above the cap height are currently (partially) cut-off.

    Enjoy!
    -Jens
*/

/*global SnapTranslator*/

SnapTranslator.dict.gl = {

/*
    Special characters: (see <http://0xcc.net/jsescape/>)

    ??, ??   \u00c4, \u00e4
    ??, ??   \u00d6, \u00f6
    ??, ??   \u00dc, \u00fc
    ??      \u00df
*/

    // translations meta information
    'language_name':
        'Galego', // the name as it should appear in the language menu
    'language_translator':
        'tecnoloxia', // your name for the Translators tab
    'translator_e-mail':
        '', // optional
    'last_changed':
        '2016-11-09', // this, too, will appear in the Translators tab

    // GUI
    // control bar:
    'untitled':
        'Sen t??tulo',
    'development mode':
        'modo de desenvolvemento',

    // categories:
    'Motion':
        'Movemento',
    'Looks':
        'Aparencia',
    'Sound':
        'Son',
    'Pen':
        'Lapis',
    'Control':
        'Control',
    'Sensing':
        'Sensores',
    'Operators':
        'Operadores',
    'Variables':
        'Variables',
    'Lists':
        'Listas',
    'Other':
        'Outros',

    // editor:
    'draggable':
        'arrastrable',

    // tabs:
    'Scripts':
        'Programas',
    'Costumes':
        'Vestimentas',
    'Sounds':
        'Sons',

    // names:
    'Sprite':
        'Obxecto',
    'Stage':
        'escenario',

    // rotation styles:
    'don\'t rotate':
        'non xira',
    'can rotate':
        'pode xirar',
    'only face left/right':
        'xira unicamente ?? esquerda ou ?? dereita',

    // new sprite button:
    'add a new sprite':
        'Engade un novo obxecto',

    // tab help
    'costumes tab help':
        'Importa unha imaxe de internet ou do \n'
            + 'teu ordenador arrastr??ndoa aqu??',
    'import a sound from your computer\nby dragging it into here':
        'Importa un son do teu ordenador arrastr??ndoo aqu??',

    // primitive blocks:

    /*
        Attention Translators:
        ----------------------
        At this time your translation of block specs will only work
        correctly, if the order of formal parameters and their types
        are unchanged. Placeholders for inputs (formal parameters) are
        indicated by a preceding % prefix and followed by a type
        abbreviation.

        For example:

            'say %s for %n secs'

        can currently not be changed into

            'say %n secs long %s'

        and still work as intended.

        Similarly

            'point towards %dst'

        cannot be changed into

            'point towards %cst'

        without breaking its functionality.
    */

    // motion:
    'Stage selected:\nno motion primitives':
        'escenario seleccionado:\nsem primitivas de movemento',

    'move %n steps':
        'mover %n pasos',
    'turn %clockwise %n degrees':
        'xirar %clockwise %n graos',
    'turn %counterclockwise %n degrees':
        'xirar %counterclockwise %n graos',
    'point in direction %dir':
        'apuntar na direcci??n %dir',
    'point towards %dst':
        'apuntar cara a %dst',
    'go to x: %n y: %n':
        'ir a x: %n y: %n',
    'go to %dst':
        'ir a %dst',
    'glide %n secs to x: %n y: %n':
        'esvarar %n seg cara a x: %n y: %n',
    'change x by %n':
        'engade %n ?? coordenada x',
    'set x to %n':
        'fixar x en %n',
    'change y by %n':
        'engade %n ?? coordenada y',
    'set y to %n':
        'fixar y en %n',
    'if on edge, bounce':
        'rebotar se toca un bordo',
    'x position':
        'posici??n x',
    'y position':
        'posici??n y',
    'direction':
        'direcci??n',

    // looks:
    'switch to costume %cst':
        'mudar vestimenta a %cst',
    'next costume':
        'seguinte vestimenta',
    'costume #':
        'vestimenta #',
    'say %s for %n secs':
        'dicir %s durante %n s',
    'say %s':
        'dicir %s',
    'think %s for %n secs':
        'pensar %s durante %n s',
    'think %s':
        'pensar %s',
    'Hello!':
        'Ola!',
    'Hmm...':
        'mmm...',
    'change %eff effect by %n':
        'engade ao efecto %eff o valor %n',
    'set %eff effect to %n':
        'fixar efecto %eff a %n',
    'clear graphic effects':
        'eliminar efectos gr??ficos',
    'change size by %n':
        'engade un %n % ao tama??o',
    'set size to %n %':
        'fixar tama??o a %n %',
    'size':
        'tama??o',
    'show':
        'amosar',
    'hide':
        'agochar',
    'go to front':
        'enviar ?? fronte',
    'go back %n layers':
        'enviar atr??s %n capas',

    'development mode \ndebugging primitives:':
        'primitivas de depuraci??n \ndo modo de desenvolvemento:',
    'console log %mult%s':
        'rexistra %mult%s na consola',
    'alert %mult%s':
        'mostra alerta con %mult%s',

    // sound:
    'play sound %snd':
        'reproducir son %snd',
    'play sound %snd until done':
        'reproducir son %snd ata rematar',
    'stop all sounds':
        'deter todos os sons',
    'rest for %n beats':
        'silencio por %n pulsos',
    'play note %n for %n beats':
        'tocar nota %n durante %n pulsos',
    'change tempo by %n':
        'aumenta o tempo en %n',
    'set tempo to %n bpm':
        'fixar tempo a %n bpm',
    'tempo':
        'tempo',

    // pen:
    'clear':
        'limpar o escenario',
    'pen down':
        'baixar lapis',
    'pen up':
        'subir lapis',
    'set pen color to %clr':
        'fixar a cor do lapis a %clr',
    'change pen color by %n':
        'engade %n ?? cor do lapis',
    'set pen color to %n':
        'fixar a cor do lapis a %n',
    'change pen shade by %n':
        'engade %n ?? intensidade do lapis',
    'set pen shade to %n':
        'fixar a intensidade en %n',
    'change pen size by %n':
        'engade %n ao tama??o do lapis',
    'set pen size to %n':
        'fixar o tama??o do lapis en %n',
    'stamp':
        'selar',
    'fill':
        'encher o escenario',

    // control:
    'when %greenflag clicked':
        'Ao premer %greenflag',
    'when %keyHat key pressed':
        'Ao premer a tecla %keyHat',
    'when I am %interaction':
        'Cando o rato %interaction',
    'clicked':
        'clica en min',
    'pressed':
        'preme en min',
    'dropped':
        'me solta',
    'mouse-entered':
        'entra en min',
    'mouse-departed':
        'sae de min',
    'when %b':
        'Cando %b',
    'when I receive %msgHat':
        'Ao recibir %msgHat',
    'broadcast %msg':
        'enviar a todos %msg',
    'broadcast %msg and wait':
        'enviar a todos %msg e agardar',
    'Message name':
        'nome da mensaxe',
    'message':
        'mensaxe',
    'any message':
        'calquera mensaxe',
    'wait %n secs':
        'agardar %n s',
    'wait until %b':
        'agardar ata %b',
    'forever %loop':
        'para sempre %loop',
    'repeat %n %loop':
        'repetir %n %loop',
    'repeat until %b %loop':
        'repetir ata %b %loop',
    'if %b %c':
        'se %b %c',
    'if %b %c else %c':
        'se %b %c se non %c',
    'report %s':
        'reportar %s',
    'stop %stopChoices':
        'deter %stopChoices',
    'all':
        'todo',
    'this script':
        'este programa',
    'this block':
        'este bloque',
    'stop %stopOthersChoices':
        'deter %stopOthersChoices',
    'all but this script':
        'todos os programas ag??s este',
    'other scripts in sprite':
        'outros programas na figura',
    'pause all %pause':
        'deter todo %pause',
    'run %cmdRing %inputs':
        'executa %cmdRing %inputs',
    'launch %cmdRing %inputs':
        'invoca %cmdRing %inputs',
    'call %repRing %inputs':
        'resultado de %repRing %inputs',
    'run %cmdRing w/continuation':
        'executa %cmdRing con continuaci??n',
    'call %cmdRing w/continuation':
        'o resultado de %cmdRing con continuaci??n',
    'warp %c':
        'Warp %c',
    'when I start as a clone':
        'cando comece como clon',
    'create a clone of %cln':
        'crear clon de %cln',
    'myself':
        'eu mesmo',
    'delete this clone':
        'eliminar este clon',

    // sensing:
    'touching %col ?':
        'tocando %col ?',
    'touching %clr ?':
        'tocanco na cor %clr ?',
    'color %clr is touching %clr ?':
        'cor %clr tocando na cor %clr ?',
    'ask %s and wait':
        'pregunta %s e agarda pola resposta',
    'what\'s your name?':
        'Como te chamas?',
    'answer':
        'resposta',
    'mouse x':
        'coordenada x do rato',
    'mouse y':
        'coordenada y do rato',
    'mouse down?':
        'bot??n do rato presionado?',
    'key %key pressed?':
        'tecla %key presionada?',
    'distance to %dst':
        'distancia ata %dst',
    'reset timer':
        'reinicia o cron??mero',
    'timer':
        'cron??metro',
    '%att of %spr':
        '%att de %spr',
    'my %get':
        '%get',
    'http:// %s':
        'o recurso http:// %s',
    'turbo mode?':
        'modo turbo?',
    'set turbo mode to %b':
        'cambiar modo turbo a %b',

    'filtered for %clr':
        'filtrado para %clr',
    'stack size':
        'altura da pila',
    'frames':
        'marcos',

    // operators:
    '%n mod %n':
        'o resto de %n ao dividilo por %n',
    'round %n':
        'arredondar %n',
    '%fun of %n':
        '%fun de %n',
    'pick random %n to %n':
        'n??mero ao chou entre %n e %n',
    '%b and %b':
        '%b e %b',
    '%b or %b':
        '%b ou %b',
    'not %b':
        'non %b',
    'true':
        'verdadeiro',
    'false':
        'falso',
    'join %words':
        'xuntar %words',
    'split %s by %delim':
        'lista cos anacos de %s entre %delim',
    'hello':
        'Ola',
    'world':
        'mundo!',
    'letter %idx of %s':
        'letra %idx de %s',
    'length of %s':
        'lonxitude de %s',
    'unicode of %s':
        'c??digo Unicode do car??cter %s',
    'unicode %n as letter':
        'car??cter cuxo c??digo Unicode ?? %n',
    'is %s a %typ ?':
        '%s ?? un/unha %typ ?',
    'is %s identical to %s ?':
        '%s ?? id??ntico a %s ?',

    'type of %s':
        'tipo de %s',

    // variables:
    'Make a variable':
        'Crear unha variable',
    'Variable name':
        'Nome da variable',
    'Script variable name':
        'Nome da variable do programa',
    'Delete a variable':
        'Eliminar variable',

    'set %var to %s':
        'fixar %var a %s',
    'change %var by %n':
        'engade a %var o valor %n',
    'show variable %var':
        'amosar variable %var',
    'hide variable %var':
        'agochar variable %var',
    'script variables %scriptVars':
        'crear as variables de programa %scriptVars',

    // lists:
    'list %exp':
        'lista %exp',
    '%s in front of %l':
        'inserir %s ao principio de %l',
    'item %idx of %l':
        'elemento %idx de %l',
    'all but first of %l':
        'todo ag??s o primeiro elemento de %l',
    'length of %l':
        'lonxitude de %l',
    '%l contains %s':
        'a lista %l cont??n %s',
    'thing':
        'cousa',
    'add %s to %l':
        'agregar %s ?? lista %l',
    'delete %ida of %l':
        'borrar %ida da lista %l',
    'insert %s at %idx of %l':
        'inserir %s na posici??n %idx de %l',
    'replace item %idx of %l with %s':
        'substitu??r %idx de %l por %s',

    // other
    'Make a block':
        'Crear un bloque',

    // menus
    // snap menu
    'About...':
        'Acerca do Snap!...',
    'Reference manual':
        'Manual de referencia',
    'Snap! website':
        'Ir ?? web de Snap!',
    'Download source':
        'Descargar o c??digo fonte',
    'Switch back to user mode':
        'Volver ao modo usuario/a',
    'disable deep-Morphic\ncontext menus\nand show user-friendly ones':
        'Desactivar men??s de contexto do Morphic\n e mostrar men??s amigables.',
    'Switch to dev mode':
        'Pasar a modo de desenvolvemento',
    'enable Morphic\ncontext menus\nand inspectors,\nnot user-friendly!':
        'Activar men??s de contexto do Morphic non amigables.',

    // project menu
    'Project notes...':
        'Notas deste proxecto',
    'New':
        'Novo proxecto',
    'Open...':
        'Abrir un proxecto',
    'Save':
        'Gardar',
    'Save to disk':
        'Gardar no disco',
    'store this project\nin the downloads folder\n(in supporting browsers)':
        'Gardar este proxecto\nno directorio de descargas\n'
            + '(em navegadores que o suportem).',
    'Save As...':
        'Gardar como...',
    'Import...':
        'Importar...',
    'file menu import hint':
        'Abrir un proxecto exportado,\nsubstitu??ndo o proxecto actual, ou\n'
            + 'importar unha biblioteca de bloques, unha\n'
            + 'vestimenta ou um son para o proxecto actual.',
    'Export project as plain text...':
        'Exportar proxecto como texto...',
    'Export project...':
        'Exportar proxecto...',
    'show project data as XML\nin a new browser window':
        'mostrar informaci??n do proxecto como XML\nnunha nova xanela',
    'Export blocks...':
        'Exportar bloques...',
    'show global custom block definitions as XML\nin a new browser window':
        'mostrar definici??ns de bloques globais personalizados como XML\nnunha nova xanela',
    'Unused blocks...':
          'Bloques non utilizados...',
    'find unused global custom blocks\nand remove their definitions':
        'Atopar bloques globais personalizados sen usar\ne borrar as s??as definici??ns',
    'Remove unused blocks':
        'Borrar bloques non utilizados',
    'there are currently no unused\nglobal custom blocks in this project':
        'Actualmente non hai bloques globais\npersonalizados sen usar neste proxecto',
    'unused block(s) removed':
        'Borrados os bloques non utilizados',
    'Export summary...':
        'Sumario da exportaci??n...',
    'open a new browser browser window\n with a summary of this project':
        'Abra o navegador cun resumo deste proxecto',
    'Contents':
        '??ndice',
    'Kind of':
        'Do tipo de',
    'Part of':
        'Unha parte de',
    'Parts':
        'Partes',
    'Blocks':
        'Bloques',
    'For all Sprites':
        'Para todos os obxectos',
    'Import tools':
        'Importar ferramentas',
    'load the official library of\npowerful blocks':
        'cargar a biblioteca oficial de\nbloques',
    'Libraries...':
        'Bibliotecas...',
    'Import library':
        'Importar biblioteca...',

    // cloud menu
    'Login...':
        'Entrar na s??a conta...',
    'Signup...':
        'Rexistrar unha nova conta...',

    // settings menu
    'Language...':
        'L??ngua...',
    'Zoom blocks...':
        'Ampliaci??n dos bloques...',
    'Stage size...':
        'Tama??o do escenario...',
    'Stage size':
        'Tama??o do escenario',
    'Stage width':
        'Anchura do escenario',
    'Stage height':
        'Altura do escenario',
    'Default':
        'Normal',
    'Blurred shadows':
        'Sombras desenfocadas',
    'uncheck to use solid drop\nshadows and highlights':
        'Desmarcar para usar sombras\ne realces n??tidos',
    'check to use blurred drop\nshadows and highlights':
        'Marcar para usar sombras\ne realces desenfocados',
    'Zebra coloring':
        'Coloraci??n de cebra',
    'check to enable alternating\ncolors for nested blocks':
        'Marcar para alternar as\ncores de bloques ani??ados',
    'uncheck to disable alternating\ncolors for nested block':
        'Desmarcar para deixar de alternar\nas cores de bloques ani??ados',
    'Dynamic input labels':
        'Etiquetas de entrada din??micas',
    'uncheck to disable dynamic\nlabels for variadic inputs':
        'Desmarcar para desactivar etiquetas\ndin??micas para entradas vari??dicas',
    'check to enable dynamic\nlabels for variadic inputs':
        'Marcar para activar etiquetas\ndin??micas para entradas vari??dicas',
    'Prefer empty slot drops':
        'Prefer empty slot drops',
    'settings menu prefer empty slots hint':
        'settings menu prefer empty slots hint',
    'uncheck to allow dropped\nreporters to kick out others':
        'uncheck to allow dropped\nreporters to kick out others',
    'Long form input dialog':
        'Forma longa da caixa de di??logo dos par??metros',
    'Plain prototype labels':
        'Etiquetas dos prototipos simples',
    'uncheck to always show (+) symbols\nin block prototype labels':
        'Desmarcar para mostrar os s??mbolos (+)\nno texto dos prototipos dos bloques',
    'check to hide (+) symbols\nin block prototype labels':
        'Marcar para agochar os s??mbolos (+)\nno texto dos prototipos dos bloques',
    'check to always show slot\ntypes in the input dialog':
        'Marcar para mostrar sempre os tipos de espazos na caizxa de di??logo',
    'uncheck to use the input\ndialog in short form':
        'Desmarcar para usar a forma curta da caixa de di??logo',
    'Virtual keyboard':
        'Teclado virtual',
    'uncheck to disable\nvirtual keyboard support\nfor mobile devices':
        'Desmarcar para desactivar\no soporte para teclado virtual\npara dispositivos m??biles',
    'check to enable\nvirtual keyboard support\nfor mobile devices':
        'Marcar para activar\no soporte para teclado virtual\npara dispositivos m??biles',
    'Input sliders':
        'Controis deslizantes de entradas',
    'uncheck to disable\ninput sliders for\nentry fields':
        'Desmarcar para desactivar\nos controis de entrada deslizantes.',
    'check to enable\ninput sliders for\nentry fields':
        'Marcar para activar\n os controis de entrada deslizantes',
    'Clicking sound':
        'Son de clic',
    'uncheck to turn\nblock clicking\nsound off':
        'Desmarcar para desactivar\n o son ao facer clic',
    'check to turn\nblock clicking\nsound on':
        'marcar para activar o son\n ao facer clic',
    'Animations':
        'Animaci??ns',
    'uncheck to disable\nIDE animations':
        'Desmarcar para desactivar\nanimaci??ns IDE',
    'check to enable\nIDE animations':
        'Marcar para activar\nanimaci??ns IDE',
    'Turbo mode':
        'Modo turbo',
    'check to prioritize\nscript execution':
        'Marcar para priorizar a\nexecuci??n dos programas',
    'uncheck to run scripts\nat normal speed':
        'Desmarcar para executar os\nprogramas ?? velocidade normal',
    'Flat design':
        'Dese??o plano',
    'Keyboard Editing':
        'Edici??n usando teclado',
    'Table support':
        'Soporte de t??boas',
    'Table lines':
        'T??boas con li??as',
    'Visible stepping':
        'trazado paso a paso visible',
    'Thread safe scripts':
        'Procesos seguros',
    'uncheck to allow\nscript reentrance':
        'Desmarcar para permitir a reentrada nos programas',
    'check to disallow\nscript reentrance':
        'Marcar para denegar a reentrada nos programas',
    'Prefer smooth animations':
        'Animaci??ns suaves',
    'uncheck for greater speed\nat variable frame rates':
        'Desmarcar para aumentar a velocidade\npermitindo ritmos variables das tramas',
    'check for smooth, predictable\nanimations across computers':
        'marcar para obter animaci??ns m??is suaves\ne previsibles entre computadoras',
    'Flat line ends':
        'Extremos das li??as planos',
    'check for flat ends of lines':
        'Marcar para facer que os\nextremos das li??as sexan planos',
    'uncheck for round ends of lines':
        'Desmarcar para facer que os\nextremos das li??as sexan redondeados',
    'Inheritance support':
        'Soporte para herdanza',

    // inputs
    'with inputs':
        'con argumentos',
    'input names:':
        'nomes dos par??metros:',
    'Input Names:':
        'Par??metros:',
    'input list:':
        'Lista de entradas:',

    // context menus:
    'help':
        'axuda',

    // palette:
    'hide primitives':
        'Agochar bloques primitivos',
    'show primitives':
        'Mostrar bloques primitivos',

    // blocks:
    'help...':
        'axuda...',
    'relabel...':
        'renomear...',
    'duplicate':
        'duplicar',
    'make a copy\nand pick it up':
        'Facer unha copia do bloque\n e suxeitala',
    'only duplicate this block':
        'Duplicar s?? este bloque',
    'delete':
        'Eliminar',
    'script pic...':
        'Fotograf??a do programa...',
    'open a new window\nwith a picture of this script':
        'Abrir unha nova xanela\ncunha foto deste programa',
    'ringify':
        'Engadir anel',
    'unringify':
        'Eliminar anel',
    'transient':
        'transitorio',
    'uncheck to save contents\nin the project':
        'Desmarcar para gardar\no contido no proxecto',
    'check to prevent contents\nfrom being saved':
        'marcar para non gardar\no contido no proxecto',

    // custom blocks:
    'delete block definition...':
        'Eliminar definici??n do bloque...',
    'edit...':
        'Editar...',

    // sprites:
    'edit':
        'editar',
    'move':
        'mover',
    'detach from':
        'soltar de',
    'detach all parts':
        'soltar todas as partes',
    'export...':
        'exportar...',

    // stage:
    'show all':
        'mostrar todos',
    'pic...':
        'fotograf??a...',
    'open a new window\nwith a picture of the stage':
        'Abrir unha nova xanela cunha fotograf??a do escenario',

    // scripting area
    'clean up':
        'limpar',
    'arrange scripts\nvertically':
        'Organizar os programas verticalmente',
    'add comment':
        'Engadir comentario',
    'undrop':
        'Desfacer a ??ltima acci??n',
    'undo the last\nblock drop\nin this pane':
        'Desfacer a ??ltima acci??n nun bloque neste separador',
    'scripts pic...':
        'Fotograf??ar os programas',
    'open a new window\nwith a picture of all scripts':
        'Afre unha nova xanela cunha\nfotograf??a de todos os programas',
    'make a block...':
        'Crear un bloque...',

    // costumes
    'rename':
        'renomear',
    'export':
        'exportar',
    'rename costume':
        'Cal ?? o novo nome da vestimenta?',

    // sounds
    'Play sound':
        'Tocar son',
    'Stop sound':
        'Deter son',
    'Stop':
        'parar',
    'Play':
        'Tocar',
    'rename sound':
        'renomear son',

    // lists and tables
    'list view...':
        'Vista de lista...',
    'table view...':
        'vista de t??boa...',
    'open in dialog...':
        'abrir na caixa de di??logo...',
    'reset columns':
        'reiniciar columnas',
    'items':
        'elementos',

    // dialogs
    // buttons
    'OK':
        'OK',
    'Ok':
        'OK',
    'Cancel':
        'Cancelar',
    'Yes':
        'Si',
    'No':
        'Non',

    // help
    'Help':
        'Axuda',

    // zoom blocks
    'Zoom blocks':
        'Ampliaci??n dos bloques',
    'build':
        'crear',
    'your own':
        'os teus prototipos',
    'blocks':
        'bloques',
    'normal (1x)':
        'normal (1x)',
    'demo (1.2x)':
        'demostraci??n (1.2x)',
    'presentation (1.4x)':
        'presentaci??n (1.4x)',
    'big (2x)':
        'grande (2x)',
    'huge (4x)':
        'enorme (4x)',
    'giant (8x)':
        'xigante (8x)',
    'monstrous (10x)':
        'monstruoso (10x)',

    // Project Manager
    'Untitled':
        'Sen t??tulo',
    'Open Project':
        'Abrir proxecto',
    '(empty)':
        '(baleiro)',
    'Saved!':
        'Gardado!',
    'Delete Project':
        'Eliminar proxecto',
    'Are you sure you want to delete':
        'Seguro de que queres eliminalo?',
    'rename...':
        'renomear...',

    // costume editor
    'Costume Editor':
        'Editor de vestimentas',
    'click or drag crosshairs to move the rotation center':
        'Clica e arrastra a mira para alterar o centro de rotaci??n',

    // project notes
    'Project Notes':
        'Notas do proxecto',

    // new project
    'New Project':
        'Novo proxecto',
    'Replace the current project with a new one?':
        'Substitu??r este proxecto por un novo?',

    // save project
    'Save Project As...':
        'Gardar proxecto como...',

    // export blocks
    'Export blocks':
        'Exportar bloques',
    'Import blocks':
        'Importar bloques',
    'this project doesn\'t have any\ncustom global blocks yet':
        'Este proxecto a??nda non ten\nning??n bloque personalizado global',
    'select':
        'seleccionar',
    'none':
        'ning??n',

    // variable dialog
    'for all sprites':
        'para todos os obxectos',
    'for this sprite only':
        's?? para este obxecto',

    // block dialog
    'Change block':
        'Cambiar tipo de bloque',
    'Command':
        'Comando',
    'Reporter':
        'Funci??n',
    'Predicate':
        'Predicado',

    // block editor
    'Block Editor':
        'Editor de bloques',
    'Apply':
        'Aplicar',

    // block deletion dialog
    'Delete Custom Block':
        'Eliminar bloque personalizado',
    'block deletion dialog text':
        'Queres eliminar este bloque e' 
	   + 'todas as s??as utilizaci??ns?',
    // input dialog
    'Create input name':
        'Crear par??metro',
    'Edit input name':
        'Editar par??metro',
    'Edit label fragment':
        'Editar etiqueta',
    'Title text':
        'T??tulo',
    'Input name':
        'Par??metro',
    'Delete':
        'Eliminar',
    'Object':
        'Obxecto',
    'Number':
        'N??mero',
    'Text':
        'Texto',
    'List':
        'Lista',
    'Any type':
        'Calquera tipo',
    'Boolean (T/F)':
        'Booleano (V/F)',
    'Command\n(inline)':
        'Comando\n(en li??a)',
    'Command\n(C-shape)':
        'Comando\n(forma C)',
    'Any\n(unevaluated)':
        'Calquera\n(sen avaliar)',
    'Boolean\n(unevaluated)':
        'Booleano\n(sen avaliar)',
    'Single input.':
        'Par??metro ??nico',
    'Default Value:':
        'Valor por defecto:',
    'Multiple inputs (value is list of inputs)':
        'M??ltiples argumentos (o valor do par??metro ?? a lista de argumentos)',
    'Upvar - make internal variable visible to caller':
        'Facer o par??metro visible ao invocador',

    // About Snap
    'About Snap':
        'Acerca de Snap',
    'Back...':
        'Atr??s...',
    'License...':
        'Licenza...',
    'Modules...':
        'M??dulos...',
    'Credits...':
        'Cr??ditos...',
    'Translators...':
        'Tradutores',
    'License':
        'Licenza',
    'current module versions:':
        'Versi??ns actuais dos m??dulos',
    'Contributors':
        'Contribuidores',
    'Translations':
        'Traducci??ns',

    // variable watchers
    'normal':
        'normal',
    'large':
        'grande',
    'slider':
        'potenci??metro',
    'slider min...':
        'm??nimo do potenci??metro...',
    'slider max...':
        'm??ximo do potenci??metro...',
    'import...':
        'importar...',
    'Slider minimum value':
        'Valor m??nimo do potenci??metro',
    'Slider maximum value':
        'Valor m??ximo do potenci??metro',

    // list watchers
    'length: ':
        'lonxitude: ',

    // coments
    'add comment here...':
        'Engade aqu?? un comentario...',

    // drow downs
    // directions
    '(90) right':
        '(90) dereita',
    '(-90) left':
        '(-90) esquerda',
    '(0) up':
        '(0) arriba',
    '(180) down':
        '(180) abaixo',

    // collision detection
    'mouse-pointer':
        'punteiro do rato',
    'edge':
        'bordo',
    'pen trails':
        'riscos do lapis',

    // costumes
    'Turtle':
        'Tartaruga',
    'Empty':
        'baleiro',

    // graphical effects
    'color':
        'cor',
    'fisheye':
        'ollo de peixe',
    'whirl':
        'remu????o',
    'pixelate':
        'pixelar',
    'mosaic':
        'mosaico',
    'saturation':
        'saturaci??n',
    'brightness':
        'brillo',
    'ghost':
        'pantasma',
    'negative':
        'negativo',
    'comic':
        'ondeado',
    'confetti':
        'confetti',

    // keys
    'space':
        'espazo',
    'up arrow':
        'frecha arriba',
    'down arrow':
        'frecha abaixo',
    'right arrow':
        'frecha dereita',
    'left arrow':
        'frecha esquerda',
    'any key':
        'calquera tecla',
    'a':
        'a',
    'b':
        'b',
    'c':
        'c',
    'd':
        'd',
    'e':
        'e',
    'f':
        'f',
    'g':
        'g',
    'h':
        'h',
    'i':
        'i',
    'j':
        'j',
    'k':
        'k',
    'l':
        'l',
    'm':
        'm',
    'n':
        'n',
    'o':
        'o',
    'p':
        'p',
    'q':
        'q',
    'r':
        'r',
    's':
        's',
    't':
        't',
    'u':
        'u',
    'v':
        'v',
    'w':
        'w',
    'x':
        'x',
    'y':
        'y',
    'z':
        'z',
    '0':
        '0',
    '1':
        '1',
    '2':
        '2',
    '3':
        '3',
    '4':
        '4',
    '5':
        '5',
    '6':
        '6',
    '7':
        '7',
    '8':
        '8',
    '9':
        '9',

    // messages
    'new...':
        'Nova...',

    // math functions
    'abs':
        'abs (valor absoluto)',
    'ceiling':
        'arredondar por riba',
    'floor':
        'arredondar por abaixo',
    'sqrt':
        'sqrt (ra??z cadrada)',
    'sin':
        'sin (seno)',
    'cos':
        'cos (coseno)',
    'tan':
        'tan (tanxente)',
    'asin':
        'asin (arco-seno)',
    'acos':
        'acos (arco-coseno)',
    'atan':
        'atan (arco-tanxente)',
    'ln':
        'ln (logaritmo neperiano)',
    'e^':
        'e^ (exponencial)',

    // delimiters
    'letter':
        'letra',
    'whitespace':
        'espazo en branco',
    'line':
        'li??a',
    'tab':
        'tabulador',
    'cr':
        'retorno de carro',

    // data types
    'number':
        'n??mero',
    'text':
        'texto',
    'Boolean':
        'booleano',
    'list':
        'lista',
    'command':
        'comando',
    'reporter':
        'funci??n',
    'predicate':
        'predicado',
    'sprite':
        'obxecto',

    // list indices
    'last':
        'o ??ltimo elemento',
    'any':
        'un elemento ao chou',

    // attributes
    'neighbors':
        'os veci??os',
    'self':
        'eu mesmo',
    'other sprites':
        'outros obxectos',
    'parts':
        'as partes',
    'anchor':
        'a ??ncora',
    'parent':
        'o proxenitor',
    'children':
        'os descendentes',
    'clones':
        'os clons',
    'other clones':
        'outros clons',
    'dangling?':
        'est??s colgado?',
    'rotation x':
        'coordenada x de rotaci??n',
    'rotation y':
        'coordenada y de rotaci??n',
    'center x':
        'coordenada x do centro',
    'center y':
        'coordenada y do centro',
    'name':
        'nome',
    'stage':
        'escenario',

// em falta no ficheiro lang-de.js

    'delete %shd':
        'eliminar %shd',
    'Retina display support':
        'Soporte para pantalla de retina',
    'uncheck for lower resolution,\nsaves computing resources':
        'Desmarcar para menor resoluci??n;\nmellora os recursos computacionais.',
    'check for higher resolution,\nuses more computing resources':
        'Marcar para maior resoluci??n;\ngasta m??is recursos computacionais.',
    'First-Class Sprites':
        'Obxectos de primeira clase',
    'uncheck to disable support\nfor first-class sprites':
        'Desmarcar para desactivar o soporte\nde obxectos de primeira clase.',
    'check to enable support\n for first-class sprite':
        'Marcar para activar o soporte\nde obxectos de primeira clase.',
    'Live coding support':
        'Soporte de programaci??n ao vivo',
    'EXPERIMENTAL! check to enable\n live custom control structures':
        'EXPERIMENTAL! Marcar para activar estruturas\nde control personalizadas ao vivo.',
    'EXPERIMENTAL! uncheck to disable live\ncustom control structures':
        'EXPERIMENTAL! Desmarcar para desactivar estruturas\nde control personalizadas ao vivo.',
    'Persist linked sublist IDs':
        'Persistir ID de sublistas ligadas',
    'check to enable\nsaving linked sublist identities':
        'Marcar para activar o\nalmazenamento das identidades de sublistas ligadas.',
    'uncheck to disable\nsaving linked sublist identities':
        'Desmarcar para desactivar o\nalmazenamento das identidades de sublistas ligadas.',
    'grow':
        'aumentar',
    'shrink':
        'reducir',
    'flip ???':
        'inverter ???',
    'flip ???':
        'inverter ???',
    'Export all scripts as pic...':
        'Exportar todos os obxectos como fotografia???',
    'show a picture of all scripts\nand block definitions':
        'Mostra unha imaxe con todos\nos obxectos e definci??ns de bloques',
    'current %dates':
        '%dates actuais',
    'year':
        'ano',
    'month':
        'mes',
    'date':
        'd??a',
    'day of week':
        'd??a da semana',
    'hour':
        'hora',
    'minute':
        'minuto',
    'second':
        'segundo',
    'time in milliseconds':
        'tempo (en milisegundos)',
    'find blocks...':
        'buscar bloques???',
    'costume name':
        'nome da vestimenta',
    'Open':
        'Abrir',
    'Share':
        'Compartir',
    'Snap!Cloud':
        'Snap!Nube',
    'Cloud':
        'Nube',
    'could not connect to:':
        'Non foi posible conectar con:',
    'Service:':
        'Servizo:',
    'login':
        'autenticaci??n',
    'ERROR: INVALID PASSWORD':
        'ERRO: CONTRASINAL INV??LIDO',
    'Browser':
        'Navegador',
    'Sign up':
        'Rexistar nova conta',
    'Signup':
        'Rexisto de nova conta',
    'Sign in':
        'Entrar',
    'Logout':
        'Sa??r',
    'Change Password...':
        'Cambiar contrasinal???',
    'Change Password':
        'Cambiar contrasinal',
    'Account created.':
        'Conta creada.',
    'An e-mail with your password\nhas been sent to the address provided':
        'Foi enviada unha mensaxe ao seu\nenderezo contendo o seu contrasinal.',
    'now connected.':
        'entrou.',
    'disconnected.':
        'sa??u.',
    'Reset password':
        'Recuperar contrasinal',
    'Reset Password...':
        'Recuperar contrasinal???',
    'User name:':
        'Nome de usuario/a:',
    'Password:':
        'contrasinal:',
    'Old password:':
        'contrasinal actual:',
    'New password:':
        'Novo contrasinal:',
    'Repeat new password:':
        'Repita o contrasinal:',
    'Birth date:':
        'Data de nacemento:',
    'January':
        'Xaneiro',
    'February':
        'Febreiro',
    'March':
        'Marzo',
    'April':
        'Abril',
    'May':
        'Maio',
    'June':
        'Ju??o',
    'July':
        'Jullo',
    'August':
        'Agosto',
    'September':
        'Setembro',
    'October':
        'Outubro',
    'November':
        'Novembro',
    'December':
        'Decembro',
    'year:':
        'ano:',
    ' or before':
        ' ou antes',
    'E-mail address:':
        'Enderezo de correo electr??nico:',
    'E-mail address of parent or guardian:':
        'Enderezo do titor ou titora:',
    'Terms of Service...':
        'Termos do Servizo???',
    'Privacy...':
        'Privacidade???',
    'I have read and agree\nto the Terms of Service':
        'Lin e declaro concordar\ncos Termos do Servizo',
    'stay signed in on this computer\nuntil logging out':
        'manterme autenticado neste\ncomputador ata que saia',
    'please fill out\nthis field':
        'Por favor encha\neste campo.',
    'User name must be four\ncharacters or longer':
        'O nome de usuario/a ten que ter\npolo menos catro caracteres.',
    'please provide a valid\nemail address':
        'Por favor indique un enderezo\nde correo electr??nico v??lido.',
    'password must be six\ncharacters or longer':
        'O contrasinal ten que ter\npolo menos seis caracteres.',
    'passwords do\nnot match':
        'os contrasinais\nnon corresponden.',
    'please agree to\nthe TOS':
        'Por favor concorde cos\nTermos do Servizo.',
    'Examples':
        'Exemplos',
    'You are not logged in':
        'A??nda non se autenticou',
    'Updating\nproject list...':
        'Actualizando a\nlista de proxectos???',
    'Opening project...':
        'Abrindo o proxecto???',
    'Fetching project\nfrom the cloud...':
        'Obtendo o proxecto\nda nube???',
    'Saving project\nto the cloud...':
        'Gardando o proxecto\nna nube???',
    'Sprite Nesting':
        'Obxectos compostos',
    'uncheck to disable\nsprite composition':
        'Desmarcar para desactivar\na composici??n de obxectos.',
    'Codification support':
        'Soporte da produci??n de c??digo',
    'check for block\nto text mapping features':
        'Desmarcar para funcionalidades\nde mapeamento entre bloques e texto.',
    'saved.':
        'gardado.',
    'options...':
        'opci??ns???',
    'read-only':
        's?? lectura',
    'Input Slot Options':
        'Opci??ns de ra??ura de Entrada',
    'Enter one option per line.Optionally use "=" as key/value delimiter\ne.g.\n   the answer=42':
        'Introduza unha opci??n por li??a. Opcionalmente, use "=" como separador\nentre chave e valor, e.g.\n   a resposta=42',
    'paint a new sprite':
        'Pintar un novo obxecto.',
    'Paint a new costume':
        'Pintar unha nova vestimenta.',
    'add a new Turtle sprite':
        'Engadir um novo obxecto.',
    'check for alternative\nGUI design':
        'Marcar para un dese??o alternativo\nda interface gr??fica co usuario/a.',
    'Rasterize SVGs':
        'Transformar SVG em mapas de bits',
    'check to rasterize\nSVGs on import':
        'Marcar para transformar os arquivos SVG\nen mapas de bits durante a importaci??n.',
    'comment pic...':
        'fotografia do comentario???',
    'open a new window\nwith a picture of this comment':
        'Abrir unha nova xanela cunha\nfotografia deste comentario.',
    'undo':
        'desfacer',
    'Brush size':
        'Espesura do pincel',
    'Constrain proportions of shapes?\n(you can also hold shift)':
        'Preservar proposci??ns das formas?\n(tam??n pode presionar shift)',
    'Eraser tool':
        'Borrador',
    'Paintbrush tool\n(free draw)':
        'Pincel\n(dese??o libre)',
    'Line tool\n(shift: vertical/horizontal)':
        'Segmento de recta\n(shift: vertical/horizontal)',
    'Stroked Rectangle\n(shift: square)':
        'Rect??ngulo\n(shift: cadrado)',
    'Filled Rectangle\n(shift: square)':
        'Rect??ngulo preenchido\n(shift: cadrado)',
    'Stroked Ellipse\n(shift: circle)':
        'Elipse\n(shift: circunferencia)',
    'Filled Ellipse\n(shift: circle)':
        'Elipse preenchida\n(shift: c??rculo)',
    'Fill a region':
        'Balde de tinta',
    'Set the rotation center':
        'Estabelecer centro de rotaci??n',
    'Pipette tool\n(pick a color anywhere)':
        'Pipeta\n(recoller unha cor en calquera sitio)',
    'Paint Editor':
        'Editor de Pintura',
    'square':
        'cadrado',
    'pointRight':
        'tri??ngulo para a dereita',
    'gears':
        'roda dentada',
    'file':
        'ficheiro',
    'fullScreen':
        'pantalla completa',
    'normalScreen':
        'pantalla normal',
    'smallStage':
        'escenario pequeno',
    'normalStage':
        'escenario normal',
    'turtle':
        'tartaruga',
    'turtleOutline':
        'contorno de tartaruga',
    'pause':
        'pausa',
    'flag':
        'bandeira',
    'octagon':
        'oct??gono',
    'cloud':
        'nube',
    'cloudOutline':
        'contorno de nube',
    'cloudGradient':
        'nube con gradiente',
    'turnRight':
        'xirar ?? dereita',
    'turnLeft':
        'xirar ?? esquerda',
    'storage':
        'almacenaxe',
    'poster':
        'p??ster',
    'flash':
        'l??strego',
    'brush':
        'pincel',
    'rectangle':
        'rect??ngulo',
    'rectangleSolid':
        'rect??ngulo preenchido',
    'circle':
        'circunferencia',
    'circleSolid':
        'c??rculo',
    'crosshairs':
        'mira',
    'paintbucket':
        'balde de tinta',
    'eraser':
        'borrador',
    'pipette':
        'pipeta',
    'speechBubble':
        'bal??n de fala',
    'speechBubbleOutline':
        'contorno de bal??n de fala',
    'arrowUp':
        'frecha arriba',
    'arrowUpOutline':
        'contorno de frecha arriba',
    'arrowLeft':
        'frecha esquerda',
    'arrowLeftOutline':
        'contorno de frecha esquerda',
    'arrowDown':
        'frecha abaixo',
    'arrowDownOutline':
        'contorno de frecha abaixo',
    'arrowRight':
        'frecha direita',
    'arrowRightOutline':
        'contorno de frecha direita',
    'robot':
        'robot',
    'turn pen trails into new costume...':
        'transformar trazos do lapis em nova vestimenta???',
    'turn all pen trails and stamps\ninto a new costume for the\ncurrently selected sprite':
        'Transforma todos os trazos do lapis\ne selos nunha nova vestimenta\n'
            + 'do obxecto seleccionado neste momento',
    'pen':
        'lapis',
    'tip':
        'punta',
    'middle':
        'medio',
    'last changed':
        'cambiado por ??ltima vez en',
    'Are you sure you want to publish':
        'Queres publicar?',
    'Are you sure you want to unpublish':
        'Qreres deixar de publicar?',
    'Share Project':
        'Compartir o proxecto',
    'Unshare Project':
        'Deixar de compartir o proxecto',
    'sharing\nproject...':
        'compartindo\nproxecto???',
    'unsharing\nproject...':
        'deixando de compartir\nproxecto???',
    'shared.':
        'compartindo.',
    'unshared.':
        'deixado de compartir.',
    'Unshare':
        'Non compartir',
    'password has been changed.':
        'o seu contrasinal foi alterado.',
    'SVG costumes are\nnot yet fully supported\nin every browser':
        'vestimentas SVG a??nda non\nson totalmente soportadas\nen todos os navegadores',
    'Save Project':
        'Gardar proxecto',
    'script pic with result...':
        'fotografia do programa inclu??ndo resultado???',
    'open a new window\nwith a picture of both\nthis script and its result':
        'Abrir unha nova xanela cunha\nfotografia tanto deste programa\ncomo do seu resultado.',
    'JavaScript function ( %mult%s ) { %code }':
        'funci??n JavaScript ( %mult%s ) { %code }',
    'Select categories of additional blocks to add to this project.':
        'Seleccionar categor??as de bloques adicionais a engadir a este proxecto.',
    'Import sound':
        'Importar son',
    'Select a sound from the media library':
        'Seleccionar un son da biblioteca de media.',
    'Import':
        'Importar',
    'Select a costume from the media library':
        'Seleccionar unha vestimenta da biblioteca de media.',
    'edit rotation point only...':
        'editar s?? o ponto de rotaci??n???',
    'Export Project As...':
        'Exportar Proxecto Como???',
    'a variable of name \'':
        'Non existe unha variable ??',
    '\'\ndoes not exist in this context':
        '??\nneste contexto',
    '(temporary)':
        '(temporal)',
    'expecting':
        'esperando',
    'input(s), but getting':
        'argumento(s), pero pasaron',
    'parent...':
        'proxenitor???',
    'current parent':
        'proxenitor actual',
    'Dragging threshold...':
        'Limiar de arrastre???',
    'Cache Inputs':
        'Memorizar entradas',
    'uncheck to stop caching\ninputs (for debugging the evaluator)':
        'Desmarcfar para parar de memorizar\nentradas (para depurar o avaliador).',
    'check to cache inputs\nboosts recursion':
        'Marcar para memorizar as entradas\n(acelera recursividade).',
    'Project URLs':
        'URL de proxecto',
    'check to enable\nproject data in URLs':
        'Marcar para activar datos\ndo proxecto nos URL.',
    'uncheck to disable\nproject data in URLs':
        'Desmarcar para desactivar\ndatos do proxecto nos URL.',
    'export project media only...':
        'Exportar s?? os media do proxecto???',
    'export project without media...':
        'Exportar proxecto sen os media???',
    'export project as cloud data...':
        'Exportar proxecto como datos da nube???',
    'open shared project from cloud...':
        'Abrir proxecto compartido a partir da nube???',
    'url...':
        'URL???',
    'Export summary with drop-shadows...':
        'Exportar resumo con sombreamento???',
    'open a new browser browser window\nwith a summary of this project\nwith drop-shadows on all pictures.\nnot supported by all browsers':
        'Abrir unha nova xanela no navegador\ncontendo un resumo deste proxecto\n'
        + 'con sombreamento en todas as imaxes\n(non soportado en todos os navegadores)',
    'specify the distance the hand has to move\nbefore it picks up an object':
        'Especificar a distancia que a man tem que se\nmover antes de agarrar alg??n obxecto',
    'block variables...':
        'adicionar variables de bloque???',
    'remove block variables...':
        'eliminar variables de bloque???',
    'block variables':
        'con variables de bloque',
    'experimental -\nunder construction':
        'Experimental ??? en construci??n',
    'Table view':
        'Vista de t??boa',
    'open in another dialog...':
        'abrir noutra caixa de di??logo???',
    'check for multi-column\nlist view support':
        'Marcar para soporte de\nvistas multicolumna de listas.',
    'uncheck to disable\nmulti-column list views':
        'Desmarcar para desactivar\nvistas multicolumna de listas.',
    'check for higher contrast\ntable views':
        'Marcar para vistas de\nt??boa con maior contraste.',
    'uncheck for less contrast\nmulti-column list views':
        'Desmarcar para vistas multicolumna\nde listas con menor contraste.',
    '(in a new window)':
        '(nunha nova xanela)',
    'save project data as XML\nto your downloads folder':
        'Gardar datos do proxecto como XML\nna s??a carpeta de descargas.',

    // produ????o de c??digo
    'map %cmdRing to %codeKind %code':
        'mapear %cmdRing no %codeKind %code',
    'map String to code %code':
        'mapear texto no c??digo %code',
    'map %codeListPart of %codeListKind to code %code':
        'mapear %codeListPart de %codeListKind no c??digo %code',
    'code of %cmdRing':
        'o c??digo de %cmdRing',
    'delimiter':
        'delimitador',
    'collection':
        'colecci??n',
    'variables':
        'variables',
    'parameters':
        'par??metros',
    'code':
        'c??digo',
    'header':
        'encabezamento',
    'header mapping...':
        'mapeamento para encabezamento???',
    'code mapping...':
        'mapeamento para c??digo???',
    'Code mapping':
        'Mapeamento para c??digo',
    'Header mapping':
        'Mapeamento para encabezamento',
    'Enter code that corresponds to the block\'s definition. Use the formal parameter\nnames as shown and <body> to reference the definition body\'s generated text code.':
        'Introduza o c??digo correspondente ?? definici??n do bloque. Use os nomes dos par??metros\n'
            + 'tal como mostrados e use <body> para referenciar o c??digo xerado da definici??n do corpo',
    'Enter code that corresponds to the block\'s definition. Choose your own\nformal parameter names (ignoring the ones shown).':
        'Introduza o c??digo correspondente ?? definici??n do bloque. Escolla os seus proprios\n'
            + 'nomes para os par??metros (ignorando os nomes mostrados).',
    'Enter code that corresponds to the block\'s operation (usually a single\nfunction invocation). Use <#n> to reference actual arguments as shown.':
        'Introduza o c??digo que corresponda ?? operaci??n do bloque (normalmente unha simple\n'
            + 'invocaci??n de rutina). Use <#n> para referenciar os argumentos tal como mostrado',
    'uncheck to disable\nkeyboard editing support':
        'Desmarcar para desactivar\na edici??n usando o teclado.',
    'check to enable\nkeyboard editing support':
        'Marcar para activar\na edici??n usando o teclado.',
    'Inheritance support':
        'Soporte para herdanza',
    'uncheck to disable\nsprite inheritance features':
        'Desmarcar para desactivar\nfuncionalidades de herdanza de obxectos.',
    'check for sprite\ninheritance features':
        'Marcar para activar\nfuncionalidades de herdanza de obxectos.'
};

