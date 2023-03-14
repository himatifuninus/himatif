{ pkgs, ... }:

{
  packages = with pkgs; [ nodejs ];

  scripts.hello.exec = "echo Welcom to HIMATIF Shell!";

  enterShell = ''
  hello
  '';

  languages.javascript.enable = true;
}
