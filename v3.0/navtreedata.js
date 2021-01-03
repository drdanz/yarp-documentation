/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "YARP", "index.html", [
    [ "Welcome to YARP", "index.html", "index" ],
    [ "Other Pages", "usergroup0.html", [
      [ "zfp_portmonitor plugin", "md_src_carriers_zfp_portmonitor_README.html", [
        [ "Usage:", "md_src_carriers_zfp_portmonitor_README.html#autotoc_md6", null ]
      ] ],
      [ "How to add a device to YARP", "add_a_device.html", [
        [ "What is a device driver in YARP?", "add_a_device.html#dev2-howto-intro", null ],
        [ "Step by step instructions", "add_a_device.html#dev2-howto-steps", null ]
      ] ],
      [ "mpi carriers", "carrier_config_mpi.html", [
        [ "Using the MPI carriers", "carrier_config_mpi.html#carrier_config_mpi_usage", null ],
        [ "What is MPI?", "carrier_config_mpi.html#carrier_config_mpi_intro", null ],
        [ "Benefits of using MPI", "carrier_config_mpi.html#carrier_config_mpi_benefits", null ],
        [ "Sideeffects of using MPI", "carrier_config_mpi.html#carrier_config_mpi_sideeffects", null ],
        [ "Compiling YARP with MPI support", "carrier_config_mpi.html#carrier_config_mpi_compliation", null ],
        [ "Open source MPI implementations", "carrier_config_mpi.html#carrier_config_mpi_implementations", null ]
      ] ],
      [ "Device Drivers How-To", "dev-how-to.html", [
        [ "What is a device driver in YARP?", "dev-how-to.html#dev-howto-intro", null ],
        [ "Adding a device driver to libYARP_dev", "dev-how-to.html#dev-howto-lib", null ],
        [ "Adding a device driver factory", "dev-how-to.html#dev-howto-factory", null ],
        [ "Getting things compiled", "dev-how-to.html#dev-howto-compile", null ],
        [ "Hey, why not automate all this?", "dev-how-to.html#dev-howto-wow", null ]
      ] ],
      [ "YARP Dependencies", "dependencies.html", [
        [ "Required Dependencies", "dependencies.html#dependencies_required", [
          [ "The ACE Library", "dependencies.html#dependencies_ace", [
            [ "The general approach to installing ACE", "dependencies.html#dependencies_ace_install", null ],
            [ "Compiling ACE on UNIX", "dependencies.html#dependencies_ace_install_unix", null ],
            [ "Compiling ACE on Windows", "dependencies.html#ace_windows", null ]
          ] ],
          [ "Eigen", "dependencies.html#dependencies_eigen", [
            [ "Linux", "dependencies.html#dependencies_eigen_linux", null ],
            [ "macOS", "dependencies.html#dependencies_eigen_macos", null ],
            [ "Windows", "dependencies.html#dependencies_eigen_windows", null ]
          ] ]
        ] ],
        [ "GUI Dependencies", "dependencies.html#dependencies_gui", [
          [ "Qt5 (Recommended)", "dependencies.html#dependencies_qt5", [
            [ "Linux", "dependencies.html#dependencies_qt5_Linux", [
              [ "Debian/Ubuntu", "dependencies.html#dependencies_qt5_debian_ubuntu", null ],
              [ "Others", "dependencies.html#dependencies_qt5_linux_others", null ]
            ] ],
            [ "Windows", "dependencies.html#dependencies_qt5_windows", null ],
            [ "macOS", "dependencies.html#dependencies_qt5_macos", null ]
          ] ]
        ] ]
      ] ],
      [ "installation_downloads", "installation_downloads.html", null ],
      [ "User Manual", "manual.html", null ],
      [ "User Manual Title", "manual_title.html", null ],
      [ "Using port monitors for arbitrating multiple connections", "arbitration.html", [
        [ "Description", "arbitration.html#arbitration_desc", null ],
        [ "Requirements", "arbitration.html#arbitration_req", null ],
        [ "Running the example", "arbitration.html#arbitration_running", null ],
        [ "Scripts", "arbitration.html#arbitration_scripts", [
          [ "ball_monitor.lua", "arbitration.html#arbitration_ball_monitor", null ],
          [ "line_monitor.lua", "arbitration.html#arbitration_line_monitor", null ],
          [ "sel_monitor.lua", "arbitration.html#arbitration_sel_monitor", null ]
        ] ]
      ] ],
      [ "An example of using port arbitrator with time events", "arbitration_tevent.html", [
        [ "Description", "arbitration_tevent.html#arbitration_tevent_desc", null ],
        [ "Requirements", "arbitration_tevent.html#arbitration_tevent_req", null ],
        [ "Running the example", "arbitration_tevent.html#arbitration_tevent_running", null ],
        [ "Scripts", "arbitration_tevent.html#arbitration_tevent_scripts", [
          [ "ball_monitor.lua", "arbitration_tevent.html#arbitration_tevent_ball_monitor", null ],
          [ "line_monitor.lua", "arbitration_tevent.html#arbitration_tevent_line_monitor", null ]
        ] ]
      ] ],
      [ "An example of using the portmonitor object at the both sides of a connection to encode and decode data", "coder_decoder.html", [
        [ "Description", "coder_decoder.html#coder_decoder_desc", null ],
        [ "Requirements", "coder_decoder.html#coder_decoder_req", null ],
        [ "Running the example", "coder_decoder.html#coder_decoder_running", null ]
      ] ],
      [ "An example which shows how to use a Lua script to modify image data", "image_modification.html", [
        [ "Description", "image_modification.html#image_modification_desc", null ],
        [ "Requirements", "image_modification.html#image_modification_req", null ],
        [ "Running the example", "image_modification.html#image_modification_running", null ]
      ] ],
      [ "An example which shows how to use C++ and DLLS to modify incoming data in an input port", "simple_dll.html", [
        [ "Description", "simple_dll.html#simple_dll_desc", null ],
        [ "Requirements", "simple_dll.html#simple_dll_req", null ],
        [ "Running the example", "simple_dll.html#simple_dll_running", null ],
        [ "Code Samples", "simple_dll.html#simple_dll_sample", null ]
      ] ],
      [ "An example which shows how to use a Lua script to modify incoming data in an input port", "simple_modification.html", [
        [ "Description", "simple_modification.html#simple_modification_desc", null ],
        [ "Requirements", "simple_modification.html#simple_modification_req", null ],
        [ "Running the example", "simple_modification.html#simple_modification_running", null ]
      ] ],
      [ "An example which shows how to use a Lua script to create a new data type in a port", "type_modification.html", [
        [ "Description", "type_modification.html#type_modification_desc", null ],
        [ "Requirements", "type_modification.html#type_modification_req", null ],
        [ "Running the example", "type_modification.html#type_modification_running", null ]
      ] ],
      [ "Ominous but Enigmatic Warning", "warning.html", null ],
      [ "Configuring your external build", "yarp_external_build.html", [
        [ "Install data files inside directories specific for your project", "yarp_external_build.html#data-files-inside-specific-directories", null ]
      ] ],
      [ "YARP Logos", "yarp_logos.html", null ],
      [ "The YARP OS library", "yarp_os.html", "yarp_os" ],
      [ "Deprecated List", "deprecated.html", null ],
      [ "Todo List", "todo.html", null ],
      [ "Modules", "modules.html", "modules" ]
    ] ],
    [ "API Documentation", "usergroup1.html", [
      [ "Namespace List", "namespaces.html", [
        [ "Namespace List", "namespaces.html", "namespaces_dup" ],
        [ "Namespace Members", "namespacemembers.html", [
          [ "All", "namespacemembers.html", "namespacemembers_dup" ],
          [ "Functions", "namespacemembers_func.html", null ],
          [ "Variables", "namespacemembers_vars.html", null ],
          [ "Typedefs", "namespacemembers_type.html", null ],
          [ "Enumerations", "namespacemembers_enum.html", null ],
          [ "Enumerator", "namespacemembers_eval.html", null ]
        ] ]
      ] ],
      [ "Class List", "annotated.html", [
        [ "Class List", "annotated.html", "annotated_dup" ],
        [ "Class Index", "classes.html", null ],
        [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
        [ "Class Members", "functions.html", [
          [ "All", "functions.html", "functions_dup" ],
          [ "Functions", "functions_func.html", "functions_func" ],
          [ "Variables", "functions_vars.html", "functions_vars" ],
          [ "Typedefs", "functions_type.html", "functions_type" ],
          [ "Enumerations", "functions_enum.html", null ],
          [ "Enumerator", "functions_eval.html", null ],
          [ "Related Functions", "functions_rela.html", null ]
        ] ]
      ] ],
      [ "File List", "files.html", [
        [ "File List", "files.html", "files_dup" ],
        [ "File Members", "globals.html", [
          [ "All", "globals.html", "globals_dup" ],
          [ "Functions", "globals_func.html", "globals_func" ],
          [ "Variables", "globals_vars.html", null ],
          [ "Typedefs", "globals_type.html", null ],
          [ "Enumerations", "globals_enum.html", null ],
          [ "Enumerator", "globals_eval.html", null ],
          [ "Macros", "globals_defs.html", "globals_defs" ]
        ] ]
      ] ],
      [ "Examples", "examples.html", "examples" ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"AbstractCarrier_8cpp.html",
"ControlBoardInterfaces_8h.html#ae65674b2d1ecaec0e4877e48ba9a0eef",
"FrameGrabberInterfaces_8h.html#a0a97b6ed7d2613871d27820425f983ca",
"IEncoders_8h.html#ad4fc88cbd6d3132da273d2f32ff1e975",
"IRGBDSensor_8h.html#a65d812424e1eb496cb702f25d68128fb",
"ImageCopy_8cpp.html#abdffa71e358441b8ca746b81adb010db",
"Log_8cpp.html#af5bc6d48de6fe1a4c7446517fc8fdb98",
"MultipleAnalogSensorsClient_8cpp_source.html",
"OutputStream_8cpp.html",
"PortMonitor_8h.html",
"RpcServer_8h_source.html",
"SubDevice_8h_source.html",
"XmlRpcCarrier_8cpp.html#a6e3d821bee339708c68b45ddf8abf402",
"classFakeLaser.html#ace9fff50235031386d7df676e0005283",
"classMessageStackThread.html#a2c0cd8b2d0e5e65239a6db0484ec8909",
"classPortWriterBufferBaseHelper.html#ad75d5b9e93e72c7629d6c7edfd6ea75f",
"classRunReadWrite.html#a36d74540197bac31a63c31b28c72016b",
"classSensorRPCData.html#aca9e2785366e9a3b4d3f70f3f6ac07c8",
"classSerialServoBoard.html#ace3cbda6f2476c5cdf01831fcff67ced",
"classTextureStatic.html#ad62ccea40e2648bbeff62b6dc1655de0",
"classjointData.html#a89504c611cd7e1388f44be62599a3bc3",
"classlaserHokuyo.html#a9a869f8668d5d6c9f7273cebc052f7da",
"classyarp_1_1dev_1_1AnalogWrapper.html#a128d0f41834a64e00c2080b0f6823630",
"classyarp_1_1dev_1_1ControlBoardRemapper.html#a0d83fb2a2669aeeacfba9e63d9a1f4d8",
"classyarp_1_1dev_1_1ControlBoardWrapper.html#a357057d7d57e62325da32ed659552752",
"classyarp_1_1dev_1_1DynamixelAX12FtdiDriver.html#a080249411d4b1edde200939e58c73db8",
"classyarp_1_1dev_1_1FakeMotionControl.html#a419a54d67147eb3e8e7c9c1f34d77847",
"classyarp_1_1dev_1_1FfmpegGrabber.html#a62e52951d9b39cfccb991fd0a7d27038",
"classyarp_1_1dev_1_1ICartesianControl.html#a3e6d8ff73db8798b89ff41fb0326771d",
"classyarp_1_1dev_1_1IFrameGrabberRgb.html#a9899b9fae6b39cbb0eb6229e4608b444",
"classyarp_1_1dev_1_1IMap2D.html#a0235ff542c5f59d0823dd8d3c68d37ba",
"classyarp_1_1dev_1_1IRangefinder2D.html#a284bfba2a669be26e24f77f8f1507a31a81ac7db9b17b9d94ce4077527ccc97a0",
"classyarp_1_1dev_1_1ImplementCanBufferFactory.html",
"classyarp_1_1dev_1_1ImplementPositionDirect.html#a42cd35fbe7b9d0991bce35c9fbf14145",
"classyarp_1_1dev_1_1MapGrid2D.html#aac3dcb7058f3d3dacca0a5f87add781d",
"classyarp_1_1dev_1_1OVRHeadset.html#a528ae4c6f37da2168e4cee443c49afdc",
"classyarp_1_1dev_1_1RGBDSensorClient.html#afd8db006babd6c4e6f8386c6836be10f",
"classyarp_1_1dev_1_1RemoteControlBoard.html#ad7caf70e9dc0c40e230db45855d62487",
"classyarp_1_1dev_1_1ServerGrabber.html#ace8368e5bc4faed678d341c650b4dcd9",
"classyarp_1_1dev_1_1TestMotor.html#a41ea9ef40fe4d815842b62c93741258d",
"classyarp_1_1dev_1_1realsense2Driver.html#a48ea8ada813a60fd3448134c62db3ab7",
"classyarp_1_1os_1_1AbstractCarrier.html#ab7f85ee5f2b9dabd378a4a849e7e8753",
"classyarp_1_1os_1_1Bytes.html#aa60ae071ef97119f6f5a27c166f4e6e3",
"classyarp_1_1os_1_1Contactable.html#ab8cf355a46574c45429a0c041663183d",
"classyarp_1_1os_1_1ManagedBytes.html#a41dd986fed9bb418c25f084e583fcba7",
"classyarp_1_1os_1_1MultiNameSpace.html#ac9432759c44e59408b2a5550c0bc2623",
"classyarp_1_1os_1_1Nodes_1_1Private.html#ae57d45f2a0cc412713fb54063b9d1d31",
"classyarp_1_1os_1_1Port.html#acabc7339a09ce49ea5341430a5046584",
"classyarp_1_1os_1_1Publisher.html#a5900df7ff216cc40426b9726418699e3",
"classyarp_1_1os_1_1RosNameSpace.html",
"classyarp_1_1os_1_1StringInputStream.html#aa6585227c82b94787ee5ddd9a5dacae3",
"classyarp_1_1os_1_1Timer_1_1PrivateImpl.html#a4a17adbd15b6f064eac6cebaf04179b0",
"classyarp_1_1os_1_1YarpNameSpace.html#a680e7fff586277aef5af137b51490955",
"classyarp_1_1os_1_1impl_1_1BottleImpl.html#a9ebdda9be978285453386033e396cd63",
"classyarp_1_1os_1_1impl_1_1FallbackNameClient.html#a7235374153af22236d07c552b7592b38",
"classyarp_1_1os_1_1impl_1_1NameClient.html#aefd70f7daa8130328ab359abd41f3cf1",
"classyarp_1_1os_1_1impl_1_1PortCore.html#a94063eddd63a6bc8bbabc7a5317951c2",
"classyarp_1_1os_1_1impl_1_1PortManager.html#a8f595dfbeaaef3ec9857c6e43b15ca83",
"classyarp_1_1os_1_1impl_1_1StoreInt16.html#a0034b59ea648e2c7865c745216728c4a",
"classyarp_1_1os_1_1impl_1_1TextCarrier.html#ad08fb3e9d2a117c60cac1eab8c1c005a",
"classyarp_1_1rosmsg_1_1diagnostic__msgs_1_1AddDiagnosticsReply.html#a373c74a8c602a14227b0d01773e2ccbd",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1PointStamped.html#a23d6a960f0f33bbbb6c87b99e74a5c32",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1TwistStamped.html#aca1efd32527d31bf6ade01db641d2b5e",
"classyarp_1_1rosmsg_1_1nav__msgs_1_1Path.html#a002787ae6555305547fad08b64948ae0",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1JointState.html#ab19eabc79773840ec4d93a1163fdb485",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1PointCloud2.html#abc49886f4d51af773645c2944034c2c4",
"classyarp_1_1rosmsg_1_1std__msgs_1_1Bool.html#a32d0500af107d5e7594785f8a126abd2",
"classyarp_1_1rosmsg_1_1std__msgs_1_1Int32MultiArray.html#a446e5d892491d8ca60901e4050b42bd2",
"classyarp_1_1rosmsg_1_1std__msgs_1_1UInt8.html#a39d3ae354012eb3818747ac9c92ff46f",
"classyarp_1_1rosmsg_1_1visualization__msgs_1_1ImageMarker.html#a2a201e5bce5ad6388a091923d14e9d10",
"classyarp_1_1rosmsg_1_1visualization__msgs_1_1MenuEntry.html#aa26ed8f85719a42014f0dd52a4630bd4",
"classyarp_1_1sig_1_1PointCloudNetworkHeader.html#a63c2d3903af49e9c6ba997d18154a43f",
"dependencies.html#dependencies_qt5",
"download.html#download_binary",
"geometry__msgs__AccelWithCovariance_8h.html",
"img-battery-charging-low_8h_source.html",
"libYARP__OS_2include_2yarp_2os_2Time_8h.html#ae9c5e1bac20414122d7895e76a752502",
"math_8cpp.html#a93b5b551a852d9606145e6160424ccd6",
"persistent_connections.html#persistent_connections_code",
"sensor__msgs_2LaserScan_8h_source.html",
"std__msgs__Int16MultiArray_8h_source.html",
"structguiParam.html#aba9ba9e8478c9d05b7c4910996c17f3b",
"structyarp_1_1os_1_1SystemInfo_1_1ProcessorInfo.html#a21d093f410748ffc7e5d1f720883b931",
"tf2__msgs__FrameGraph_8h.html#a78e8ae138177125b5292138a886b200c",
"v3_0_0.html#autotoc_md163",
"yarp_2rosmsg_2geometry__msgs_2TwistWithCovariance_8h_source.html",
"yarp_2rosmsg_2tf_2FrameGraphReply_8h.html",
"yarp_swig.html#yarp_swig_configure_main_build"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';