@echo off
color 0f
cd C:\creepytoast\java\ja12303
java -Xmx1024M -Xms1024M -cp Minecraft.jar "-Dorg.lwjgl.librarypath=%CD%/natives" "-Dnet.java.games.input.librarypath=%CD%/natives" rl
exit