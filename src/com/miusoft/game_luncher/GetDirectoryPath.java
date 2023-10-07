package com.miusoft.game_luncher;

public class GetDirectoryPath {
    /**
     * This method returns the directory path of the application.
     * @return The directory path as a String.
     */
    public static String getDirPath(){
        return System.getProperty("user.dir");
    }
}
