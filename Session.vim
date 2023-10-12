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
badd +25 ~/dev/angular-project/app/.gitignore
badd +1 ~/dev/angular-project/src/index.html
badd +1 ~/dev/angular-project/src/main.ts
badd +1 ~/dev/angular-project/src/app/app.component.html
badd +1 ~/dev/angular-project/src/assets/sample.json
badd +13 ~/dev/angular-project/src/app/services/json.service.ts
badd +13 ~/dev/angular-project/src/app/app.component.ts
argglobal
%argdel
$argadd .
edit ~/dev/angular-project/app/.gitignore
argglobal
balt ~/dev/angular-project/src/app/app.component.ts
setlocal fdm=expr
setlocal fde=nvim_treesitter$foldexpr()
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal nofen
let s:l = 25 - ((24 * winheight(0) + 30) / 60)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 25
normal! 0
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
