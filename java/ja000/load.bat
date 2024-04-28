@echo off
cd C:\creepytoast\java\ja000
color 0f
java -Xmx1024M -Xms1024M -cp Minecraft.jar "-Dorg.lwjgl.librarypath=%CD%/natives" "-Dnet.java.games.input.librarypath=%CD%/natives" Start
rem pause
exit