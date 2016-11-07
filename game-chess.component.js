"use strict";

angular
    .module("app")
    .component("gameChess", {
        templateUrl: "/resources/app/game/chess/game-chess.html",
        controllerAs: "ctrl",
        controller: ChessController
    });

function ChessController() {
    var ctrl = this;
    var chessBoard;

    ctrl.restart = function() {
        ChessBoard.restart();
        chessBoard = new ChessBoard();
    };

    var init = function() {

        chessBoard = new ChessBoard();

        window.addEventListener("click", clickEvent);

        function clickEvent(evt) {

            if (chessBoard.whoseTurn == null) {
                return;
            }
            else if (evt.target.tagName == "IMG") {
                var row = parseInt(evt.target.parentElement.id.charAt(1));
                var column = parseInt(evt.target.parentElement.id.charAt(2));
                chessBoard.unitAction(evt.target, row, column);
            }
            else if (evt.target.tagName == "TD") {
                var row = parseInt(evt.target.id.charAt(1));
                var column = parseInt(evt.target.id.charAt(2));
                chessBoard.boardAction(row, column);
            }
        }
    };

    init();
}