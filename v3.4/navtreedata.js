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
      [ "Using the YARP companion utility", "companion_use.html", [
        [ "YARP companion basics", "companion_use.html#companion_basics", null ],
        [ "YARP companion advanced", "companion_use.html#companion_advanced", null ]
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
      [ "Device Drivers How-To", "dev-how-to.html", [
        [ "What is a device driver in YARP?", "dev-how-to.html#dev-howto-intro", null ],
        [ "Adding a device driver to YARP_dev", "dev-how-to.html#dev-howto-lib", null ],
        [ "Adding a device driver factory", "dev-how-to.html#dev-howto-factory", null ],
        [ "Getting things compiled", "dev-how-to.html#dev-howto-compile", null ],
        [ "Hey, why not automate all this?", "dev-how-to.html#dev-howto-wow", null ]
      ] ],
      [ "User Manual", "manual.html", [
        [ "YARP User Manual", "manual.html#manual_intro", null ]
      ] ],
      [ "User Manual Title", "manual_title.html", null ],
      [ "Software for Humanoid Robots: The YARP Approach", "note_yarp_philosophy.html", [
        [ "One processor is never enough.", "note_yarp_philosophy.html#philosophy_many", null ],
        [ "Modularity.", "note_yarp_philosophy.html#philosophy_module", null ],
        [ "Minimal interference.", "note_yarp_philosophy.html#philosophy_interfere", null ],
        [ "Stopping hurts.", "note_yarp_philosophy.html#philosophy_stopping", null ],
        [ "Humility helps.", "note_yarp_philosophy.html#philosophy_humility", null ],
        [ "Exploit diversity.", "note_yarp_philosophy.html#philosophy_diversity", null ]
      ] ],
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
        [ "Running the example", "coder_decoder.html#coder_decoder_running", null ],
        [ "Scripts", "coder_decoder.html#coder_decoder_scripts", [
          [ "codec.lua", "coder_decoder.html#coder_decoder_codec", null ]
        ] ]
      ] ],
      [ "An example which shows how to use a Lua script to modify image data", "image_modification.html", [
        [ "Description", "image_modification.html#image_modification_desc", null ],
        [ "Requirements", "image_modification.html#image_modification_req", null ],
        [ "Running the example", "image_modification.html#image_modification_running", null ],
        [ "Scripts", "image_modification.html#image_modification_scripts", [
          [ "img_modifier.lua", "image_modification.html#image_modification_img_modifier", null ]
        ] ]
      ] ],
      [ "An example which shows how to use C++ and DLLS to modify incoming data in an input port", "simple_dll.html", [
        [ "Description", "simple_dll.html#simple_dll_desc", null ],
        [ "Requirements", "simple_dll.html#simple_dll_req", null ],
        [ "Running the example", "simple_dll.html#simple_dll_running", null ],
        [ "Code Samples", "simple_dll.html#simple_dll_sample", [
          [ "SimpleMonitorObject.h", "simple_dll.html#simple_dll_sample_h", null ],
          [ "SimpleMonitorObject.cpp", "simple_dll.html#simple_dll_sample_cpp", null ]
        ] ]
      ] ],
      [ "An example which shows how to use a Lua script to modify incoming data in an input port", "simple_modification.html", [
        [ "Description", "simple_modification.html#simple_modification_desc", null ],
        [ "Requirements", "simple_modification.html#simple_modification_req", null ],
        [ "Running the example", "simple_modification.html#simple_modification_running", null ],
        [ "Scripts", "simple_modification.html#simple_modification_scripts", [
          [ "bot_modifier.lua", "simple_modification.html#simple_modification_bot_modifier", null ]
        ] ]
      ] ],
      [ "An example which shows how to use a Lua script to create a new data type in a port", "type_modification.html", [
        [ "Description", "type_modification.html#type_modification_desc", null ],
        [ "Requirements", "type_modification.html#type_modification_req", null ],
        [ "Running the example", "type_modification.html#type_modification_running", null ],
        [ "Scripts", "type_modification.html#type_modification_scripts", [
          [ "type_modifier.lua", "type_modification.html#type_modification_type_modifier", null ]
        ] ]
      ] ],
      [ "Ominous but Enigmatic Warning", "warning.html", null ],
      [ "Configuring your external build", "yarp_external_build.html", [
        [ "Install data files inside directories specific for your project", "yarp_external_build.html#data-files-inside-specific-directories", null ]
      ] ],
      [ "YARP Logos", "yarp_logos.html", null ],
      [ "The YARP os library", "yarp_os.html", "yarp_os" ],
      [ "LICENSE", "md__8github_git-workflow_LICENSE_8gitgraph.html", null ],
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
          [ "Typedefs", "namespacemembers_type.html", "namespacemembers_type" ],
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
          [ "Variables", "globals_vars.html", "globals_vars" ],
          [ "Typedefs", "globals_type.html", "globals_type" ],
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
"ControlBoardVocabs_8h.html#a0e51c99ec901c3348d9f360a3d30ebf1",
"FixedSizeBuffersManager_8h.html",
"IAnalogSensor_8cpp_source.html",
"IMotor_8h.html#abf3adad6d36f6a7ac2f32f5af8552408",
"Image_8copyPixels_8cpp.html#a19240e2a71cdb936ecfa47c67188c656",
"ImplementInteractionMode_8cpp.html#a795ff6aae566d5a5dd03e5c478f5b11e",
"Log_8h.html#a4a275ba8ff2d38cc93ccecf94eb043aa",
"MonitorLogComponent_8cpp_source.html",
"Network_8h.html",
"PointCloudUtils-inl_8h_source.html",
"RandScalar_8cpp_source.html",
"SerialServoBoard_8h.html#a6ea10f4260b54a61665ead26cb995ba3",
"TextureBattery_8h_source.html",
"YarpLogger_8h.html#a13e199fc30f7981a5996430871840181a1358a05527640003098d594d47525fe2",
"classAnalogSensorClient.html#a025c96406a6743ccf8b90da93aea4a49",
"classBoschIMU.html#ae57f9f30fea0f5416283d7e8352961e7",
"classControlBoardWrapper.html#a20bc299a8706762089e4c10400703f60",
"classDevicePipe.html#ad01f7616874c69fac6287083f27b9f16",
"classFakeBot.html#a46de81ed21a7036dcb545f5e69bb893b",
"classFakeMotionControl.html#ab35d429ddcfa7243cdcf61231702e280",
"classFrameTransformClient.html#ab61ec440820941b9d337dd504b6bdfc2",
"classInputPortProcessor.html#a4e85d0254d6cc1ac4fefd33a205c31cd",
"classMap2DServer.html#af1632ac570f5d649084096ec8d6a31a4",
"classMpiStream.html#a7bf52823e2998cd740fdb47fc2cf5ae8",
"classNodeArgs.html#a2bbb32308e7e59d7033ca94477df686f",
"classPriorityCarrier.html#a88bbb0b37ab1e7fac9092a6b919cbbe5",
"classRangefinder2DClient.html#a88f2a4cf72f62378bed1254e5aef0e9e",
"classRemoteControlBoard.html#ab271d6473240121b0cd65a5de9c0c224",
"classRpLidar2.html#a96a940281c94b7bcea75dc8f61cdd9a8",
"classSensorRPCData_1_1Editor.html#a5a2b34bf916a1a61c668ca55557988cb",
"classServerInertial.html#af23dc6590faba520f9d1f6832a35ba63",
"classTestFrameGrabber.html",
"classUpowerBattery.html#a383bcf7abb2a0713667e44d7dc5dfef3",
"classdepthCameraDriver.html#a90b5432a1ff5a251f7cd42ffb73e64a9",
"classrealsense2Driver.html#a1a2a06dd0497186513f5567465f57486",
"classyarp_1_1dev_1_1CanMessage.html#ac078ca2a2938cc53f28b03b7156a31df",
"classyarp_1_1dev_1_1IAnalogSensor.html#ab03054d8f05e82bf72ee6868d5124233",
"classyarp_1_1dev_1_1IEncodersRaw.html#aca69ee9979575a2e63726126afc8b50b",
"classyarp_1_1dev_1_1IInteractionMode.html",
"classyarp_1_1dev_1_1IPositionControlRaw.html#a78a570a6f2086ef5c2bd314fee162ee3",
"classyarp_1_1dev_1_1IVelocityControlRaw.html#a39a894f82cc5c743634345b0a0a7417f",
"classyarp_1_1dev_1_1ImplementMotorEncoders.html#abc119ee601a62ba1fe598e81c6d09878",
"classyarp_1_1dev_1_1LaserScan2D_1_1Editor.html#a6be2f9b0f6d6cf3fcc1f5db3e8754908",
"classyarp_1_1dev_1_1Nav2D_1_1Map2DArea.html#a04d5d44e6c8c1b35e3ee2adaa21dc726",
"classyarp_1_1dev_1_1OdometryData6D_1_1Editor.html#aefb6d46a6a0cf30b5b796658cbedfd0d",
"classyarp_1_1dev_1_1audioBufferSizeData_1_1Editor.html#a5535a68b89154d0200911bb183a03733",
"classyarp_1_1manager_1_1ApplicationInterface.html",
"classyarp_1_1manager_1_1Executable.html#a1090c00bd6a03c7f4fa6c86d9d1d8feb",
"classyarp_1_1manager_1_1MEvent.html#afda92ccd20270570dffd2ab196a6d079",
"classyarp_1_1manager_1_1OutputData.html#a1d89c0568892e4fbbd952ce272783c99",
"classyarp_1_1math_1_1NormRand.html#aacf39ba649e7bbd038d43fad175cd478",
"classyarp_1_1os_1_1Bottle.html#a9a98533da1dfef02172cfcae62439f00",
"classyarp_1_1os_1_1ConnectionWriter.html#a956730c78e37bc495b80e4cedb3a1303",
"classyarp_1_1os_1_1LogStream.html#a7940b3eb61eb2ffc8e5484c57b0a3f40",
"classyarp_1_1os_1_1NetworkClock.html#a0179bf7e2017ec5bcc8cf644914d2e67",
"classyarp_1_1os_1_1PeriodicThread_1_1Private.html#a61d3a1fedb72e667a5958d25c2a7dd17",
"classyarp_1_1os_1_1QosStyle.html#a18c75b3e75daf971d0bba7213f8c4250a226a8bb6622474daedd8234bebf086c0",
"classyarp_1_1os_1_1Route.html",
"classyarp_1_1os_1_1SystemInfoSerializer.html#a7215de93c50077a5228877dd40b0fc50",
"classyarp_1_1os_1_1WireLink.html#adf8a1d3a54ecba9a7a3ec4baba332712",
"classyarp_1_1os_1_1impl_1_1BufferedConnectionWriter.html#a149478dfa09cdd667bb0c933bd13312d",
"classyarp_1_1os_1_1impl_1_1LogForwarder.html#aac70a4e73a33ccce867d6ea1fc7d3579",
"classyarp_1_1os_1_1impl_1_1PortCoreAdapter.html#a5d59b074e381d9543e21ff9339bdf359",
"classyarp_1_1os_1_1impl_1_1StoreBlob.html#ad43d5d963dcdcc6893692187b5120cd0",
"classyarp_1_1os_1_1impl_1_1TcpCarrier.html#aae922a594086f7878ca0c46d1d34e7ac",
"classyarp_1_1rosmsg_1_1TickTime.html#a71661e1985c006f4950afa9972815e33",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1AccelWithCovarianceStamped.html",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1Quaternion.html#a1d19212c50ce3bac1d94e5f95216e955",
"classyarp_1_1rosmsg_1_1nav__msgs_1_1GetPlan.html#ae53d83ea628f07e2079bd2adeb56a5a7",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1CompressedImage.html#a783c64022f06f5282fd8b1e21ed73e0a",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1MultiEchoLaserScan.html#a3c3df0cb66f08274b0ff653a5382cc7f",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1TimeReference.html#a450431a6f7c10e81d9f0263fb34f9a9f",
"classyarp_1_1rosmsg_1_1std__msgs_1_1Float64.html#a91e34d3f326c0d559245d97ae2f94c3a",
"classyarp_1_1rosmsg_1_1std__msgs_1_1UInt16.html#a7f67ebe197f12e86b793a9ea76a2f62f",
"classyarp_1_1rosmsg_1_1tf_1_1tfMessage.html#a0da789e362de8dcce76033cc896adb3a",
"classyarp_1_1rosmsg_1_1visualization__msgs_1_1InteractiveMarkerUpdate.html#a248e231ea0fb6d9e9d559aa0fa4d1705",
"classyarp_1_1serversql_1_1impl_1_1SubscriberOnSql.html#aac38fbc59e55b25f29da1f9ac890aede",
"classyarp_1_1sig_1_1VectorBase.html#a0b5f73e4f05ef3ca568dc06f1c80c979",
"classyarp_1_1yarpLogger_1_1LoggerEngine.html#a9e62d1062efc563c1833ae829e93060a",
"dir_0dafac909c99ddc6637cb1b90c771d5d.html",
"executable_8h_source.html",
"geometry__msgs__AccelWithCovariance_8h.html#a5b5283c5687ccef8bc68cc53cd2669d9",
"group__group__basic.html",
"install_yarp_mac.html#install_mac_from_source",
"libYARP__sig_2src_2yarp_2sig_2PointCloud_8h.html#a1b199e0b27d3a914a7e5a9ce38123e00",
"namespaceyarp_1_1gsl.html",
"physicresource_8cpp.html",
"rostypes_tutorial_continued.html#rostypes_tutorial_continued_visible",
"stateExtendedReader_8cpp.html",
"structMonitorLua.html#ad7c68cee9d2ff7950fad396406863ec7",
"structswig__lua__const__info.html#a0f4d6393367808867778882594520a44",
"structyarp_1_1profiler_1_1NetworkProfiler_1_1PortDetails.html#a124f9a0421769daabf5621f392a9b0fd",
"swigluarun_8h.html#a1f65b7dd49c5f8fe3a8b2c073ffa39b5",
"thrift_tutorial.html#thrift_tutorial_subs_services",
"v2_3_68_1.html#autotoc_md127",
"v3_1_1.html#autotoc_md365",
"yarp-v3_84-build_2src_2libYARP__conf_2src_2yarp_2conf_2api_8h.html#a0d0544d3cfdea45a41d921441580aabb",
"yarp_2rosmsg_2sensor__msgs_2JointState_8h_source.html",
"yarp_2src_2libYARP__name_2src_2yarp_2name_2api_8h.html#ad4ff8b042a2784d430e7257aae2b1885",
"yarp_pointcloud.html#general_usage_point_cloud",
"yarpdev.html#yarpdev_list"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';