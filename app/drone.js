var arDrone = require('ar-drone');
var client  = arDrone.createClient();

// client.createRepl();

// client.config('control:altitude_max', 1000);
// client.config('control:control_vz_max', 100);
// client.config('control:control_yaw', 1.0);
// client.config('control:euler_angle_max', 0.1);
// client.config('control:outdoor', false);
// client.config('control:flight_without_shell', false);

client.takeoff();

// this.animate('phiM30Deg', 1000)
// this.animate('phi30Deg', 1000)
// this.animate('thetaM30Deg', 1000)
// this.animate('theta30Deg', 1000)
// this.animate('theta20degYaw200deg', 1000)
// this.animate('theta20degYawM200deg', 1000)
// this.animate('turnaround', 1000)
// this.animate('turnaroundGodown', 1000)
// this.animate('yawShake', 1000)
// this.animate('yawDance', 1000)
// this.animate('phiDance', 1000)
// this.animate('thetaDance', 1000)
// this.animate('vzDance', 1000)
// this.animate('wave', 1000)
// this.animate('phiThetaMixed', 1000)
// this.animate('doublePhiThetaMixed', 1000)
// this.animate('flipAhead', 1000)
// this.animate('flipBehind', 1000)
// this.animate('flipLeft', 1000)
// this.animate('flipRight', 1000)

client
  .after(3000, function(){
    this.animate('wave', 2000)
  })
  .after(10000, function(){
    this.stop();
    this.land();
  })