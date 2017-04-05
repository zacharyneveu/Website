

	"Save Commands
	"type jk or JK to save and exit normal mode
	inoremap jk <esc>:w<C-CR>
	inoremap JK <esc>:w<C-CR>
	"type fd to save when already in normal mode
	nmap fd :w<enter>
	"use control f to save and force quit
	nmap <C-f> :wq!<enter>

	"Git commands- map short phrases to
	"full command line snippets
	nmap gpull :!git pull origin
	nmap gpush :!git push origin
	nmap gcom :!git commit -m "
	nmap gadd :!git add *.cpp *.h <enter>
	nmap gstat :!git status <enter>
	nmap gbranch :!git branch
