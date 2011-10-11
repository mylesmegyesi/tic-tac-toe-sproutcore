/*globals Tictactoe */

Tictactoe.Theme = SC.AceTheme.create({
  name: 'tictactoe'
});

SC.Theme.addTheme(Tictactoe.Theme);

SC.defaultTheme = 'tictactoe';
