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
    [ "Yarp Modules", "modules.html", "modules" ],
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
      [ "README", "md_doc_release_master_README.html", null ],
      [ "README", "md_doc_release_yarp_3_4_README.html", null ],
      [ "yarp-device-realsense2_4", "md_doc_release_yarp_3_4_yarp-device-realsense2_4.html", null ],
      [ "Ominous but Enigmatic Warning", "warning.html", null ],
      [ "Configuring your external build", "yarp_external_build.html", [
        [ "Install data files inside directories specific for your project", "yarp_external_build.html#data-files-inside-specific-directories", null ]
      ] ],
      [ "YARP Logos", "yarp_logos.html", null ],
      [ "The YARP os library", "yarp_os.html", "yarp_os" ],
      [ "LICENSE", "md__8github_git-workflow_LICENSE_8gitgraph.html", null ],
      [ "Deprecated List", "deprecated.html", null ],
      [ "Todo List", "todo.html", null ]
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
"ControlBoardRemapperHelpers_8h_source.html",
"DynamixelAX12FtdiDriver_8h.html#ad739a24aff51f21c8db39315d835906e",
"GenericVocabs_8h.html#a10d311818bd6c459f8f292d6f10fe4f0",
"IJoypadController_8cpp.html#a7a55a41f40fd857615368b902af9489d",
"IVisualParams_8h.html#a49c6b805c291633f1b12ab137f5e7d97",
"Image_8copyPixels_8cpp.html#ae309e2237e91ee59b01e13ed18ef60ff",
"Lidar2DDeviceBase_8cpp.html",
"Math_8h.html#ad013e179e9407489cece8e2dbb725fea",
"NavTypes_8h.html#ad73deb536121e2c3a4870893b49dbde3",
"PlatformTime_8h.html#a74a51c81b3b00cf7490d7a636825f0c4",
"PoseStampedRosPublisher_8cpp_source.html",
"Run_8cpp.html#a258e3b580e688a0cf46e4258525aeaf1",
"StyleNameService_8h_source.html",
"Vector_8h.html#a2de82e49cbfebd4aa484e126319dc45f",
"carrier_config.html#carrier_config_xmlrpc",
"classBatteryWrapper.html#a4741ebc9bef22cb99b8ac11024baf701",
"classControlBoardRemapper.html#a907e827cd90484104edbdc14445eab31",
"classControlBoardWrapperPidControl.html#ac90297c042b4d44f0794f1792287e0d9",
"classDynamixelAX12FtdiDriver.html#ae2d869967f5e5c38b40290788637cff0",
"classFakeFrameGrabber.html#a04553de065a77b39ec3c82ca30708ae7",
"classFakeMotionControl.html#a501eb6a9930fc118c743a850bab28eb7",
"classFakeMotionControl.html#aef8bab50e9af2d34284fbcb9139eac0f",
"classFrameTransformClient.html#a25c6cce472506a7bf16368d642877d51",
"classImplementDC1394.html#afaed1795750d38f6373aa87e1f23e7f7",
"classMagneticFieldRosPublisher.html#a6ae7144e06d9e2811085fba16d203077",
"classMpiBcastStream.html#aa34e9287959dbce2fa7aeacd42e5038a",
"classNavigation2DClient.html",
"classPortAudioDeviceDriver.html#ab12c7635394468de3b42202def2ed2c1",
"classRGBDSensorClient.html#a3e2b07d7ca4c6013642c427922ea0032",
"classRemoteControlBoard.html#a03e95d02cd6e5e4058edcb840142e483",
"classRemoteFrameGrabber.html#a0616e032215d4d9c70735fe9b1bf29d2",
"classSegmentationImageConverter.html#a68e382b23e3f11d09565dd96629e6efa",
"classSensorStreamingData_1_1Editor.html#a269868329655385dfd994d54a34e206d",
"classShmemInputStreamImpl.html#aef31f60538c370e2ffe3543318ed4a2c",
"classTextureStatic.html#a397a834d6728be3342076b4bfbbc19ae",
"classWrappedDevice.html",
"classfakeIMU.html#a24e719b957b92b85a3421d37b2f5e617",
"classstreamFrameListener.html",
"classyarp_1_1dev_1_1DriverLinkCreator.html#a43c0764e65f7907dd9ceacb07c521bf6",
"classyarp_1_1dev_1_1IControlLimitsRaw.html#a38f67f787b282a00df66591c5114fc40",
"classyarp_1_1dev_1_1IGazeControl.html#a3a2a3e4c1f9d7daff52a9261f91ce6cf",
"classyarp_1_1dev_1_1IPidControl.html#a28b08d6a8c8e633abac7ea713a302ad6",
"classyarp_1_1dev_1_1ISkinPatches.html#a0e51c7ea72b47888da4ae912077a309a",
"classyarp_1_1dev_1_1ImplementEncoders.html#ad4f8c896c5ef61fc6738e3cfbffff088",
"classyarp_1_1dev_1_1ImplementVirtualAnalogSensor.html#a1e2894232f0fe7d1253c8bddc846993b",
"classyarp_1_1dev_1_1MobileBaseVelocity_1_1Editor.html#ada83ea0c7e7266dd3257c81d2d7e13fc",
"classyarp_1_1dev_1_1OdometryData6D.html#ab0477b8faf0d9a2985f76c4f347a5ac8",
"classyarp_1_1dev_1_1StubImplControlLimitsRaw.html",
"classyarp_1_1dev_1_1impl_1_1jointData_1_1Editor.html#ab11c1488375e3a6666778dd6aacad3ad",
"classyarp_1_1manager_1_1Connection.html",
"classyarp_1_1manager_1_1InputData.html#aca7e6493bb985054f5d57d20f4073861",
"classyarp_1_1manager_1_1Module.html#adaca2e85d85df038bfce9830c63fe5be",
"classyarp_1_1manager_1_1TempLoader.html#a59827c4e5755c967241fac47fe712721",
"classyarp_1_1os_1_1AbstractCarrier.html#a49c03065d09bb74a3505f067c223374b",
"classyarp_1_1os_1_1Carriers.html#a92af949ab4c0690338164d1d7d372f37",
"classyarp_1_1os_1_1IConfig.html#a1a7390522e87a2c12d307b1d43c44f40",
"classyarp_1_1os_1_1NestedContact.html#a26d5580cc2331008ce3183a5d011b800",
"classyarp_1_1os_1_1NullConnectionWriter.html#a0eba545fbe4b90ddf3902493427c37bb",
"classyarp_1_1os_1_1PortReport.html",
"classyarp_1_1os_1_1ResourceFinder.html#a0d8c0bc18d6f604c4a1ad1ca1c9473e0",
"classyarp_1_1os_1_1ShiftStream.html#ae2aae19a573375f9e6036f3bca452f38",
"classyarp_1_1os_1_1TypedReader.html#a745ff51b9ea5c4595d7244246a57a1b5",
"classyarp_1_1os_1_1idl_1_1WireReader.html#af1b75b3d4b945c3d688bba539f7d1512",
"classyarp_1_1os_1_1impl_1_1FakeTwoWayStream.html#a8cf303339e23e818b25e547593911a48",
"classyarp_1_1os_1_1impl_1_1NameserCarrier.html#a7c3745b664175ffa284970d09ea4cb94",
"classyarp_1_1os_1_1impl_1_1Protocol.html#aa2d1335cc764c48d1b4c4cde104ed51e",
"classyarp_1_1os_1_1impl_1_1StoreList.html#a6c8c532c00f1f18b065958a1651fbfb0",
"classyarp_1_1profiler_1_1graph_1_1Graph.html#a902c5b3eacb66d60752525ab23297a95",
"classyarp_1_1rosmsg_1_1diagnostic__msgs_1_1DiagnosticStatus.html#ab81abcb745ef86fdcd6412ee6431fffb",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1PolygonStamped.html#ada6f1debe1b68c7b16b495396bd15222",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1Vector3.html#a74d255ef1d0efe104ac67ca0b814ab74",
"classyarp_1_1rosmsg_1_1nav__msgs_1_1SetMapReply.html#ab439f97a09a252dcdccf99d68b24d467",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1JoyFeedback.html#ad66d6ae98cd1a22e3bf700fa7bf541f7",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1Range.html#a23edb6d4d3038fa9155f0b074b642dbd",
"classyarp_1_1rosmsg_1_1std__msgs_1_1ByteMultiArray.html#add051291932a3d6185f45f686ed2fa47",
"classyarp_1_1rosmsg_1_1std__msgs_1_1Int64MultiArray.html#aff53a3ab767d4e0d0ae63b8d917da4ef",
"classyarp_1_1rosmsg_1_1stereo__msgs_1_1DisparityImage.html#adb1e36fbf419f7c73857a3e81673ed6d",
"classyarp_1_1rosmsg_1_1visualization__msgs_1_1InteractiveMarker.html#accbf0d9a5d7f2ea98705ac7d12d90f9e",
"classyarp_1_1serversql_1_1impl_1_1ComposedNameService.html#a97dacdd57c80ebca67cb30441769f963",
"classyarp_1_1sig_1_1Matrix.html#a4b6581e46c8c2ec83a8c7fbaab33c885",
"classyarp_1_1wire__rep__utils_1_1WireTwiddlerGap.html#ac56386d9ff7731d584267fca6f516dcf",
"contributing.html#autotoc_md737",
"dir_a586524bbeea38accbad1ff84505e2a5.html",
"functions_t.html",
"globals_func_v.html",
"impl_2IplImage_8h.html#ab6ef51820e6503226e566605636236d7",
"libYARP__os_2src_2yarp_2os_2Time_8h.html#a37710b717e2f68a43e2abbb466f42d7f",
"md_doc_release_yarp_3_4_README.html",
"nav__msgs__GetMapReply_8h.html#a8c5f7a1e50fa2a5e64f8194011707a11",
"primresource_8cpp.html",
"sensor__msgs__BatteryState_8h.html#a72a7b9bdce53a7d83d842deb359e8f9c",
"std__msgs__MultiArrayDimension_8h.html#ac04011e00b2d26cf5194e9d2e8cee3cb",
"struct__IplROI.html#a3b5425f150fdf07de23b4bafd06d7fb3",
"structyarp_1_1dev_1_1RGBDSensorParamParser_1_1RGBDParam.html#ad960a44e2c9ba58406bf3fd07b7f33ab",
"structyarp_1_1sig_1_1DataXYZRGBA.html#ab9109c9b3b5e425ab9775f0858bb3622",
"swigluarun_8h.html#af21b898b6e053c8bb73855969e0888b0",
"v2_3_2.html",
"v2_3_72_1.html#autotoc_md298",
"v3_4_0.html#autotoc_md613",
"yarp_2rosmsg_2geometry__msgs_2PolygonStamped_8h.html#a36b819f247120f07e9d182e5e7b10d3a",
"yarp_2rosmsg_2std__msgs_2String_8h_source.html",
"yarp_data_dirs.html#datafiles_contextsrobots",
"yarp_with_ros_existing_yarp_ports.html#yarp_with_ros_existing",
"ymm-types_8h.html#a2a258df14366136378c2aedcad4793f8a037cfe34d3116214eb0a2264147066f0"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';