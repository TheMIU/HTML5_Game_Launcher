package com.miusoft.game_luncher;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;
import java.io.IOException;

public class AppInitializer extends Application {
    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws IOException {
        /**  Here include your FXML file */
        Scene mainScene = new Scene(FXMLLoader.load(getClass().getResource("view/Game.fxml")));
        primaryStage.setScene(mainScene);
        primaryStage.setResizable(false);
        primaryStage.setTitle("GhostHunter Launcher");
        primaryStage.show();
    }
}
