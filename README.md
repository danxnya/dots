# dots
<div align="center">
    <h1>This is my dotfiles with hyprland for arch^^</h1>
</div>

<div align="center">
    <img src="https://raw.githubusercontent.com/danxnya/dots/main/screens/gif.gif.gif" alt="Hyprland Image">
</div>

<div align="center">
    <h1>Installations 💫</h1>
</div>


### first install yay or your favorite helper
```zsh
pacman -S --needed git base-devel && git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```
## dependencies

you need install [Hyprland](https://hyprland.org/)
  ```zsh
  yay -S hyprland-git
  ```
install tools.
  ```zsh
  yay -S waybar-hyprland rofi kitty swaybg swaylock-fancy-git swayidle pamixer light brillo pavucontrol fish visual-studio-code-bin lsd bat
  ```
if you need more tools, only add in this line.

### Necessary Font 🔑:

- [JetBrains Mono Nerd Font](https://github.com/ryanoasis/nerd-fonts/releases/download/v2.2.2/JetBrainsMono.zip)

- [Iosevka Nerd Font](https://github.com/ryanoasis/nerd-fonts/releases/download/v2.3.3/Iosevka.zip)

- [Font Awesome](https://archlinux.org/packages/community/any/ttf-font-awesome/)
  ```
  yay -S ttf-font-awesome
  ```

Optional Font:

- [NotoColorEmoji](https://github.com/googlefonts/noto-emoji/raw/main/fonts/NotoColorEmoji.ttf)
- [Codicon](https://github.com/microsoft/vscode-codicons/raw/main/dist/codicon.ttf)


Then run this command for your system to detect the newly installed fonts.

```
fc-cache -fv
```
for install in your system copy my .config file and it's all. :)))

```zsh
git clone https://github.com/danxnya/dots.git
cd dots
cp -r dots/* ~/.config/
```
if you want my theme for firefox need install the extension [nighttab](https://addons.mozilla.org/en-US/firefox/addon/nighttab/) and import my file .json


