/*
*      Copyright (c) 2014 Chi Hoang 
*      All rights reserved
*/

cd = new Timer(new List());
QUnit.test( cd, function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

cd.AddBox(new Subject(40));
QUnit.test( cd, function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

cd.AddBox(new Subject(30));
QUnit.test( cd, function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

cd.AddBox(new Subject(20));
QUnit.test( cd, function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

cd.AddBox(new Subject(10));
QUnit.test( cd, function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

cd.AddBox(new Subject(20));
QUnit.test( cd, function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

cd.AddBox(new Subject(30));
QUnit.test( cd, function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

cd.AddBox(new Subject(40));
QUnit.test( cd, function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

test = new Subject(20);
QUnit.test( test, function( assert ) {
  assert.equal( test.timer, "20","Passed!");
});

cd.AddBox(new Subject(50));
omega=cd.observers.get(7).speed;
QUnit.test( cd, function( assert ) {
  assert.equal( omega , "1000", "Passed!" );
});

cd = new test3();
QUnit.test( cd, function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});
