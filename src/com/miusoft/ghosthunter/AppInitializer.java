package com.miusoft.ghosthunter;

import com.miusoft.ghosthunter.controller.GameController;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;
import java.io.InputStream;

public class AppInitializer extends Application {
    // Assuming your HTML file is located in the "web" directory within the JAR
    InputStream htmlInputStream = AppInitializer.class.getResourceAsStream("/web/index.html");

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws IOException {
        Scene mainScene = new Scene(FXMLLoader.load(getClass().getResource("view/Game.fxml")));
        primaryStage.setScene(mainScene);
        primaryStage.setResizable(false);
        primaryStage.setTitle("GhostHunter Launcher");
        primaryStage.show();
    }
}
