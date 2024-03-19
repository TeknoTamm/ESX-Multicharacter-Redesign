fx_version 'cerulean'

game 'gta5'
author 'ESX-Framework - Linden - KASH'
description 'Official Multicharacter System For ESX Legacy'
version '1.10.2'
lua54 'yes'


-- -- The reason why I call this design renewal simple is that it does not 
-- contain excessive changes and these are my first designs. I made these designs for my own server,
--  but after making better ones, I no longer needed them, so I thought it would be good to share them with the community.
-- -- You can tell me my mistakes (without offending them) so that I can learn my mistakes and correct them.

-- -- Sorry for my bad english, my native language is not english.


dependencies { 'es_extended', 'esx_context', 'esx_identity', 'esx_skin' }

shared_scripts { '@es_extended/imports.lua', '@es_extended/locale.lua', 'locales/*.lua', 'config.lua' }

server_scripts { '@oxmysql/lib/MySQL.lua', 'server/*.lua' }

client_scripts { 'client/*.lua' }

ui_page { 'html/ui.html' }

files { 'html/ui.html', 'html/css/main.css', 'html/js/app.js', 'html/locales/*.js'}
