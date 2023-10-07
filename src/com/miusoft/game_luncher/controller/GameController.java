package com.miusoft.game_luncher.controller;

import com.miusoft.game_luncher.GetDirectoryPath;
import javafx.application.Platform;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.Scene;
import javafx.scene.input.KeyCode;
import javafx.scene.layout.StackPane;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
import javafx.stage.StageStyle;

public class GameController {
    /**
     * Replace '\Output\game\index.html'
     * with the appropriate path for your application.
     */
    String dir = GetDirectoryPath.getDirPath();
    String htmlFilePath = "file:///" + dir + "\\Output\\game\\index.html";


    @FXML
    void loadOnClick(ActionEvent event) {
        Stage gameStage = new Stage();
        gameStage.initStyle(StageStyle.UNDECORATED);
        gameStage.setFullScreen(true);
        gameStage.setFullScreenExitHint(""); // Remove the hint message on fullscreen exit

        WebView webView = new WebView();
        WebEngine engine = webView.getEngine();
        engine.load(htmlFilePath);

        StackPane stackPane = new StackPane(webView);
        Scene gameScene = new Scene(stackPane);
        gameStage.setScene(gameScene);

        // close the application when "ESC" key is pressed
        gameScene.setOnKeyPressed(keyEvent -> {
            if (keyEvent.getCode() == KeyCode.ESCAPE) {
                gameStage.close();
                Platform.exit(); // Exit the JavaFX application
            }
        });

        gameStage.show();
    }
}
