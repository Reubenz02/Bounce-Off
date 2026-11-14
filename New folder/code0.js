gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDPaddle1Objects1= [];
gdjs.Untitled_32sceneCode.GDPaddle1Objects2= [];
gdjs.Untitled_32sceneCode.GDPaddle1Objects3= [];
gdjs.Untitled_32sceneCode.GDPaddle2Objects1= [];
gdjs.Untitled_32sceneCode.GDPaddle2Objects2= [];
gdjs.Untitled_32sceneCode.GDPaddle2Objects3= [];
gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects1= [];
gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2= [];
gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects3= [];
gdjs.Untitled_32sceneCode.GDWallObjects1= [];
gdjs.Untitled_32sceneCode.GDWallObjects2= [];
gdjs.Untitled_32sceneCode.GDWallObjects3= [];
gdjs.Untitled_32sceneCode.GDCornerObjects1= [];
gdjs.Untitled_32sceneCode.GDCornerObjects2= [];
gdjs.Untitled_32sceneCode.GDCornerObjects3= [];
gdjs.Untitled_32sceneCode.GDScoreTextObjects1= [];
gdjs.Untitled_32sceneCode.GDScoreTextObjects2= [];
gdjs.Untitled_32sceneCode.GDScoreTextObjects3= [];
gdjs.Untitled_32sceneCode.GDMesssageTextObjects1= [];
gdjs.Untitled_32sceneCode.GDMesssageTextObjects2= [];
gdjs.Untitled_32sceneCode.GDMesssageTextObjects3= [];
gdjs.Untitled_32sceneCode.GDCenterLineObjects1= [];
gdjs.Untitled_32sceneCode.GDCenterLineObjects2= [];
gdjs.Untitled_32sceneCode.GDCenterLineObjects3= [];
gdjs.Untitled_32sceneCode.GDPowerUpObjects1= [];
gdjs.Untitled_32sceneCode.GDPowerUpObjects2= [];
gdjs.Untitled_32sceneCode.GDPowerUpObjects3= [];
gdjs.Untitled_32sceneCode.GDPowerTextObjects1= [];
gdjs.Untitled_32sceneCode.GDPowerTextObjects2= [];
gdjs.Untitled_32sceneCode.GDPowerTextObjects3= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Bit Bit Loop.aac", true, 45, 1);
}
}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Paddle1"), gdjs.Untitled_32sceneCode.GDPaddle1Objects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle1Objects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Paddle1"), gdjs.Untitled_32sceneCode.GDPaddle1Objects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle1Objects2[i].getBehavior("TopDownMovement").simulateDownKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Paddle1"), gdjs.Untitled_32sceneCode.GDPaddle1Objects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle1Objects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Paddle1"), gdjs.Untitled_32sceneCode.GDPaddle1Objects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle1Objects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Paddle2"), gdjs.Untitled_32sceneCode.GDPaddle2Objects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle2Objects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Paddle2"), gdjs.Untitled_32sceneCode.GDPaddle2Objects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle2Objects2[i].getBehavior("TopDownMovement").simulateDownKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Paddle2"), gdjs.Untitled_32sceneCode.GDPaddle2Objects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle2Objects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Paddle2"), gdjs.Untitled_32sceneCode.GDPaddle2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle2Objects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}
}

}


};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Paddle1"), gdjs.Untitled_32sceneCode.GDPaddle1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPaddle1Objects2[i].getX() < 140 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPaddle1Objects2[k] = gdjs.Untitled_32sceneCode.GDPaddle1Objects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPaddle1Objects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle1Objects2[i].setX(140);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Paddle1"), gdjs.Untitled_32sceneCode.GDPaddle1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPaddle1Objects2[i].getX() > 900 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPaddle1Objects2[k] = gdjs.Untitled_32sceneCode.GDPaddle1Objects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPaddle1Objects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle1Objects2[i].setX(900);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Paddle1"), gdjs.Untitled_32sceneCode.GDPaddle1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPaddle1Objects2[i].getY() < 40 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPaddle1Objects2[k] = gdjs.Untitled_32sceneCode.GDPaddle1Objects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPaddle1Objects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle1Objects2[i].setY(40);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Paddle1"), gdjs.Untitled_32sceneCode.GDPaddle1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPaddle1Objects2[i].getY() > 820 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPaddle1Objects2[k] = gdjs.Untitled_32sceneCode.GDPaddle1Objects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPaddle1Objects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle1Objects2[i].setY(820);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Paddle2"), gdjs.Untitled_32sceneCode.GDPaddle2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPaddle2Objects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPaddle2Objects2[i].getX() < 980 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPaddle2Objects2[k] = gdjs.Untitled_32sceneCode.GDPaddle2Objects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPaddle2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPaddle2Objects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle2Objects2[i].setX(980);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Paddle2"), gdjs.Untitled_32sceneCode.GDPaddle2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPaddle2Objects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPaddle2Objects2[i].getX() > 1740 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPaddle2Objects2[k] = gdjs.Untitled_32sceneCode.GDPaddle2Objects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPaddle2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPaddle2Objects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle2Objects2[i].setX(1740);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Paddle2"), gdjs.Untitled_32sceneCode.GDPaddle2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPaddle2Objects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPaddle2Objects2[i].getY() < 40 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPaddle2Objects2[k] = gdjs.Untitled_32sceneCode.GDPaddle2Objects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPaddle2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPaddle2Objects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle2Objects2[i].setY(40);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Paddle2"), gdjs.Untitled_32sceneCode.GDPaddle2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPaddle2Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPaddle2Objects1[i].getY() > 820 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPaddle2Objects1[k] = gdjs.Untitled_32sceneCode.GDPaddle2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPaddle2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPaddle2Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle2Objects1[i].setY(820);
}
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGeneric_95959595ballObjects2Objects = Hashtable.newFrom({"Generic_ball": gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.Untitled_32sceneCode.GDWallObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGeneric_95959595ballObjects2Objects = Hashtable.newFrom({"Generic_ball": gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.Untitled_32sceneCode.GDWallObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGeneric_95959595ballObjects2Objects = Hashtable.newFrom({"Generic_ball": gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPaddle1Objects2Objects = Hashtable.newFrom({"Paddle1": gdjs.Untitled_32sceneCode.GDPaddle1Objects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGeneric_95959595ballObjects2Objects = Hashtable.newFrom({"Generic_ball": gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPaddle2Objects2Objects = Hashtable.newFrom({"Paddle2": gdjs.Untitled_32sceneCode.GDPaddle2Objects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGeneric_95959595ballObjects2Objects = Hashtable.newFrom({"Generic_ball": gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCornerObjects2Objects = Hashtable.newFrom({"Corner": gdjs.Untitled_32sceneCode.GDCornerObjects2});
gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Generic_ball"), gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2[i].setX(gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2[i].getX() + (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2[i].setY(gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2[i].getY() + (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Generic_ball"), gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.Untitled_32sceneCode.GDWallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGeneric_95959595ballObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2[0].getCenterYInScene()) < 540);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(Math.abs(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()));
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2[i].setY(36);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Hit 8.aac", false, 70, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Generic_ball"), gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.Untitled_32sceneCode.GDWallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGeneric_95959595ballObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2[0].getCenterYInScene()) >= 540);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(-(Math.abs(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber())));
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2[i].setY(980);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Hit 8.aac", false, 70, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Generic_ball"), gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2);
gdjs.copyArray(runtimeScene.getObjects("Paddle1"), gdjs.Untitled_32sceneCode.GDPaddle1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGeneric_95959595ballObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPaddle1Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2 */
/* Reuse gdjs.Untitled_32sceneCode.GDPaddle1Objects2 */
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(Math.abs(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()) + 15);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(((( gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2[0].getCenterYInScene()) - (( gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPaddle1Objects2[0].getCenterYInScene())) * 4);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2[i].setX((( gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPaddle1Objects2[0].getPointX("")) + (( gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPaddle1Objects2[0].getWidth()) + 4);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Hit 8.aac", false, 95, 1.1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Generic_ball"), gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2);
gdjs.copyArray(runtimeScene.getObjects("Paddle2"), gdjs.Untitled_32sceneCode.GDPaddle2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGeneric_95959595ballObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPaddle2Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2 */
/* Reuse gdjs.Untitled_32sceneCode.GDPaddle2Objects2 */
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(-(Math.abs(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber())) - 15);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(((( gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2[0].getCenterYInScene()) - (( gdjs.Untitled_32sceneCode.GDPaddle2Objects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPaddle2Objects2[0].getCenterYInScene())) * 4);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2[i].setX((( gdjs.Untitled_32sceneCode.GDPaddle2Objects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPaddle2Objects2[0].getPointX("")) - (gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2[i].getWidth()) - 4);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Hit 8.aac", false, 95, 1.1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Corner"), gdjs.Untitled_32sceneCode.GDCornerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Generic_ball"), gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGeneric_95959595ballObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCornerObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "cornerCD") > 0.4;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cornerCD");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(-(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()) * 1.1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(-(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()) * 1.1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Blip 8.aac", false, 85, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() > 900);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(900);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < -900);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(-900);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() > 760);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(760);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < -760);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(-760);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < 80);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(80);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() > -80);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(-80);
}
}

}


};gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MesssageText"), gdjs.Untitled_32sceneCode.GDMesssageTextObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(true);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMesssageTextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMesssageTextObjects2[i].getBehavior("Text").setText("Player 2 wins!(Imagine losing Player 1, couldnt be Player 2)" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Press R to Restart");
}
}
}

}


};gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MesssageText"), gdjs.Untitled_32sceneCode.GDMesssageTextObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(true);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMesssageTextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMesssageTextObjects2[i].getBehavior("Text").setText("Player 1 wins!(Imagine losing Player 2, couldnt be Player 1)" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Press R to Restart");
}
}
}

}


};gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Generic_ball"), gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2[0].getPointX("")) < -70);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Untitled_32sceneCode.GDScoreTextObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(6).sub(1);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreTextObjects2[i].getBehavior("Text").setText("P1: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber()) + "   P2: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2[i].setPosition(928,508);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(340);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(-260, 260));
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Generic_ball"), gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2[0].getPointX("")) > 1970);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Untitled_32sceneCode.GDScoreTextObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(1);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreTextObjects2[i].getBehavior("Text").setText("P1: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber()) + "   P2: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2[i].setPosition(928,508);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(-340);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(-260, 260));
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Generic_ball"), gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects1);
gdjs.copyArray(runtimeScene.getObjects("MesssageText"), gdjs.Untitled_32sceneCode.GDMesssageTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Paddle1"), gdjs.Untitled_32sceneCode.GDPaddle1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Paddle2"), gdjs.Untitled_32sceneCode.GDPaddle2Objects1);
gdjs.copyArray(runtimeScene.getObjects("PowerText"), gdjs.Untitled_32sceneCode.GDPowerTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("PowerUp"), gdjs.Untitled_32sceneCode.GDPowerUpObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Untitled_32sceneCode.GDScoreTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(3);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(3);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(false);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects1[i].setPosition(928,508);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(340);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(180);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle1Objects1[i].setPosition(140,430);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle2Objects1[i].setPosition(1740,430);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreTextObjects1[i].getBehavior("Text").setText("P1: 3   P2: 3");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMesssageTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMesssageTextObjects1[i].getBehavior("Text").setText("");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(3);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(380);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle1Objects1[i].getBehavior("TopDownMovement").setMaxSpeed(380);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle2Objects1[i].getBehavior("TopDownMovement").setMaxSpeed(380);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPowerUpObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPowerUpObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "powerSpawn");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPowerTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPowerTextObjects1[i].getBehavior("Text").setText("POWER-UPS LEFT: 3");
}
}
}

}


};gdjs.Untitled_32sceneCode.mapOfEmptyGDPowerUpObjects = Hashtable.newFrom({"PowerUp": []});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPowerUpObjects2Objects = Hashtable.newFrom({"PowerUp": gdjs.Untitled_32sceneCode.GDPowerUpObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGeneric_95959595ballObjects2Objects = Hashtable.newFrom({"Generic_ball": gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPowerUpObjects2Objects = Hashtable.newFrom({"PowerUp": gdjs.Untitled_32sceneCode.GDPowerUpObjects2});
gdjs.Untitled_32sceneCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PowerText"), gdjs.Untitled_32sceneCode.GDPowerTextObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(3);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(380);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "powerSpawn");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPowerTextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPowerTextObjects2[i].getBehavior("Text").setText("POWER-UPS LEFT: 3");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.Untitled_32sceneCode.mapOfEmptyGDPowerUpObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "powerSpawn") > 3;
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PowerText"), gdjs.Untitled_32sceneCode.GDPowerTextObjects2);
gdjs.Untitled_32sceneCode.GDPowerUpObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPowerUpObjects2Objects, gdjs.randomInRange(240, 1620), gdjs.randomInRange(160, 860), "");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPowerUpObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPowerUpObjects2[i].setWidth(64);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPowerUpObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPowerUpObjects2[i].setHeight(64);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPowerUpObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPowerUpObjects2[i].resetTimer("life");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(1);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPowerTextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPowerTextObjects2[i].getBehavior("Text").setText("POWER-UPS LEFT: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PowerUp"), gdjs.Untitled_32sceneCode.GDPowerUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPowerUpObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPowerUpObjects2[i].getTimerElapsedTimeInSecondsOrNaN("life") > 8 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPowerUpObjects2[k] = gdjs.Untitled_32sceneCode.GDPowerUpObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPowerUpObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPowerUpObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPowerUpObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPowerUpObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "powerSpawn");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Generic_ball"), gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2);
gdjs.copyArray(runtimeScene.getObjects("PowerUp"), gdjs.Untitled_32sceneCode.GDPowerUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGeneric_95959595ballObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPowerUpObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Paddle1"), gdjs.Untitled_32sceneCode.GDPaddle1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Paddle2"), gdjs.Untitled_32sceneCode.GDPaddle2Objects2);
/* Reuse gdjs.Untitled_32sceneCode.GDPowerUpObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Powerup 4.aac", false, 55, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() * 1.2);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() * 1.2);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(90);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle1Objects2[i].getBehavior("TopDownMovement").setMaxSpeed(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPaddle2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPaddle2Objects2[i].getBehavior("TopDownMovement").setMaxSpeed(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPowerUpObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPowerUpObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "powerSpawn");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PowerUp"), gdjs.Untitled_32sceneCode.GDPowerUpObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPowerUpObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPowerUpObjects1[i].setAngle((gdjs.Untitled_32sceneCode.GDPowerUpObjects1[i].getAngle()) + 60 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
}

}


};gdjs.Untitled_32sceneCode.eventsList8 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MesssageText"), gdjs.Untitled_32sceneCode.GDMesssageTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Untitled_32sceneCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreTextObjects1[i].getBehavior("Text").setText("P1: 3   P2: 3");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMesssageTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMesssageTextObjects1[i].getBehavior("Text").setText("");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cornerCD");
}
}

}


{


gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList6(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList7(runtimeScene);
}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDPaddle1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPaddle1Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDPaddle2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPaddle2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPaddle2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDWallObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWallObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWallObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCornerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCornerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCornerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDScoreTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScoreTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScoreTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDMesssageTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMesssageTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMesssageTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCenterLineObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCenterLineObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCenterLineObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPowerUpObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPowerUpObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPowerUpObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPowerTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPowerTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPowerTextObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList8(runtimeScene);
gdjs.Untitled_32sceneCode.GDPaddle1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPaddle1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPaddle1Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDPaddle2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPaddle2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPaddle2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGeneric_9595ballObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDWallObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWallObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWallObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCornerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCornerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCornerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDScoreTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScoreTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScoreTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDMesssageTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMesssageTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMesssageTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCenterLineObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCenterLineObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCenterLineObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPowerUpObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPowerUpObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPowerUpObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPowerTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPowerTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPowerTextObjects3.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
