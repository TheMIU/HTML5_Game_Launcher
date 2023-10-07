package com.miusoft.ghosthunter.controller;

import javafx.application.Platform;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.input.KeyCode;
import javafx.scene.layout.StackPane;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
import javafx.stage.StageStyle;

import java.io.InputStream;

public class GameController {
    @FXML
    private WebView gameView;
    @FXML
    private Button btnLoad;



    String dir = GetDirectoryPath.getDirPath();

    @FXML
    void loadOnClick(ActionEvent event) {
        Stage gameStage = new Stage();
        gameStage.initStyle(StageStyle.UNDECORATED);
        gameStage.setFullScreen(true);
        gameStage.setFullScreenExitHint(""); // Remove the hint message on fullscreen exit

        WebView webView = new WebView();
        WebEngine engine = webView.getEngine();
        String htmlFilePath = "file:///" + dir + "\\game\\index.html";
        engine.load(htmlFilePath);

        StackPane stackPane = new StackPane(webView);
        Scene gameScene = new Scene(stackPane);
        gameStage.setScene(gameScene);

        // close the application when "Escape" is pressed
        gameScene.setOnKeyPressed(keyEvent -> {
            if (keyEvent.getCode() == KeyCode.ESCAPE) {
                gameStage.close();
                Platform.exit(); // Exit the JavaFX application
            }
        });

        gameStage.show();
    }
}
