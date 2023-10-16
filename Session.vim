let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/dev/angular-project
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +9 ~/dev/angular-project/compose.yaml
badd +20 ~/dev/angular-project/Dockerfile
badd +2 ~/dev/angular-project/.gitignore
badd +6 ~/dev/angular-project/bin/container/start
badd +5 bin/start
badd +1 ~/dev/angular-project/app/.gitignore
badd +1 ~/dev/angular-project/src/index.html
badd +1 ~/dev/angular-project/src/main.ts
badd +4 ~/dev/angular-project/src/app/app.component.html
badd +1 ~/dev/angular-project/src/assets/sample.json
badd +26 src/app/services/json.service.ts
badd +36 src/app/app.component.ts
badd +15 ~/dev/angular-project/src/app/app.module.ts
badd +24 package.json
badd +1 ~/dev/angular-project/src/app/app-routing.module.ts
badd +21 tsconfig.json
badd +1 ~/dev/angular-project/src/app/types/types.ts
badd +9 ~/dev/angular-project/src/app/services/fuzzy-search.service.ts
badd +0 ~/dev/angular-project/src/app/services/fuzzy.service.spec.ts
badd +1 ~/dev/angular-project/src/app/services/fuzzy-search.service.spec.ts
argglobal
%argdel
$argadd ./
argglobal
enew
file oil:///Users/juayhee/dev/angular-project/src/app/
balt ~/dev/angular-project/src/app/services/fuzzy-search.service.ts
setlocal fdm=expr
setlocal fde=nvim_treesitter$foldexpr()
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal nofen
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
