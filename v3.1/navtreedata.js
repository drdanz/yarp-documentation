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
          [ "Variables", "globals_vars.html", "globals_vars" ],
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
"DeviceGroup_8cpp_source.html",
"FrameGrabberInterfaces_8h.html#ab32e53d82a0b250627e27eac32cc9b83a66c1fc36a50634d5fcad68b32cb75242",
"IJoypadController_8cpp.html#a02e8cb4c3a09f99c4c0c70143c1b1660",
"ImageCopy_8cpp.html#a3a0cbc72f3a2e13dd83f3a53dc577227",
"ImplementControlMode_8cpp.html",
"Logger_8h.html",
"MultipleAnalogSensorsRemapper_8cpp.html",
"PidEnums_8h.html#ae6315c5ca764ec6b7ae6e7082430e90e",
"PortWriterBuffer_8cpp.html",
"Run_8cpp.html#a13984b7b8a17ae8a4c58e3a94728cd90",
"TcpFace_8cpp.html",
"actionlib__msgs__GoalID_8h.html#a7954c589db58eb212356a6a600693ad1",
"classForwardingCarrier.html#a2b1e990763d8f505ea61f22838e3787f",
"classMonitorBinding.html#ab14b2ae70e78009bd3a8304ef73d6852",
"classPortWriterBufferBaseHelper.html#aa8c3ac360dff24a6e5cd0b6bee006889",
"classRunRead.html#ac96deaeec44b40bd4b2e0a5b8745267e",
"classSensorRPCData.html#aac12b0f8ac433b1cef1c78ca0ce0b730",
"classSerialServoBoard.html#aa154411b4cbfed62de96175834fc7856",
"classTextureStatic.html",
"classjointData.html#a7b0803fb4be6bb7c01086bf12e402420",
"classlaserHokuyo.html#a73fc5528124ea9de944a95367298175c",
"classyarp_1_1dev_1_1CartesianEvent.html",
"classyarp_1_1dev_1_1ControlBoardRemapper.html#a8b7aa57df4d44932337a46a62f6c2d87",
"classyarp_1_1dev_1_1ControlBoardWrapper.html#ac2c8647b2d714268152c273291675cd8",
"classyarp_1_1dev_1_1FakeBot.html#a213608be1c22efa291728df9754b71a2",
"classyarp_1_1dev_1_1FakeMotionControl.html#a92b65794e4dd982457518b2d8f3443e3",
"classyarp_1_1dev_1_1FrameTransformServer.html#a04951d722cf06bc6caacfc867ddc0185",
"classyarp_1_1dev_1_1ICurrentControl.html#af1ef99cf8a35950d437253711e17e9bc",
"classyarp_1_1dev_1_1IGazeControl.html#aa939635cf90acbb5e0f49bb114f86bc3",
"classyarp_1_1dev_1_1IPidControl.html#a5c8d09ee9f83665941124db911f28c22",
"classyarp_1_1dev_1_1IThreeAxisGyroscopes.html#a7d04b44e05ea6c5d65e7fa3dffcc135c",
"classyarp_1_1dev_1_1ImplementDC1394.html#a932ca496b97ab2fdc7a53489e602ba62",
"classyarp_1_1dev_1_1Implement__DepthVisualParams__Sender.html#ad78bc1995b55192488b57d5014956338",
"classyarp_1_1dev_1_1MultipleAnalogSensorsClient.html#ae0031c078a2314b3514fd81017ff8826",
"classyarp_1_1dev_1_1OpenCVGrabber.html#ad49dfaa86893088d7ad213f9c32ebf98",
"classyarp_1_1dev_1_1RemappedSubControlBoard.html#a9aac37f2c50cebf8962cb6414a9f72cc",
"classyarp_1_1dev_1_1RobotDescriptionClient.html#a9207c299ca9e70694e205c5e9f230ff8",
"classyarp_1_1dev_1_1StubImplControlLimitsRaw.html",
"classyarp_1_1dev_1_1depthCameraDriver.html#aa5725d7973f1daf81bb28f32a53c1f76",
"classyarp_1_1math_1_1Quaternion.html#a48e6bafb249c895ed25f29dc9170e11e",
"classyarp_1_1os_1_1BayerCarrier.html#a59bb5ddc1b5c69e0afcb1db59de5aa49",
"classyarp_1_1os_1_1Connection.html#a34021719e65392c4cd61ec00204af003",
"classyarp_1_1os_1_1H264Carrier.html#a66874498ed957cab85cef85352ee4922",
"classyarp_1_1os_1_1ModifyingCarrier.html#a74388ef0bd4e73662de83ea0d2e70394",
"classyarp_1_1os_1_1NetworkBase.html#a20d1100e9e9056164290a5e98e7a651d",
"classyarp_1_1os_1_1OutputStream.html#a36ab9b168185c63a46c4b8bd70205e97",
"classyarp_1_1os_1_1PortReaderBufferBase.html#aaf0c7f32ba3db2ce4ef1f5361071fb56",
"classyarp_1_1os_1_1RateThread.html#a3406b1754f76af48f223dec0ceac36c9",
"classyarp_1_1os_1_1Semaphore.html#a85def09f6175a731185def2c66470bb2",
"classyarp_1_1os_1_1TcpRosCarrier.html#a941b99a104480db0fc2ce05d105c7732",
"classyarp_1_1os_1_1Value.html#a74fc086a15b4a57c827132841aaff88e",
"classyarp_1_1os_1_1idl_1_1WireReader.html#a710628e2c170494fa1c5e060958fdbcb",
"classyarp_1_1os_1_1impl_1_1ConnectionRecorder.html#aa40cdc9d21015fd6092764ffd76805ed",
"classyarp_1_1os_1_1impl_1_1LocalCarrierStream.html#aa7c8dbe3eab28af0abf0f2398762aa56",
"classyarp_1_1os_1_1impl_1_1NameServer_1_1NameRecord.html#aaad78058623dac22c8c38ebafb0b8681",
"classyarp_1_1os_1_1impl_1_1PortCoreInputUnit.html#a295176f251f27565bc4cdee887d81f85",
"classyarp_1_1os_1_1impl_1_1Storable.html#a3e3d3769ef8be524c405583f98c004e3",
"classyarp_1_1os_1_1impl_1_1StoreVocab.html#a3de9e2da9de7f90210e661e0d755215d",
"classyarp_1_1rosmsg_1_1TickDuration.html#a5f66179339d50db055599a3d59e6c648",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1AccelStamped.html#ae10f708db21087b5ad438f67f095f920",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1PoseWithCovarianceStamped.html#a22602629d5c741ce1191e11d8490797a",
"classyarp_1_1rosmsg_1_1nav__msgs_1_1GetMapReply.html#ac06ba51cf4b6dc2c838fbfdc6f93f5a1",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1ChannelFloat32.html#ab5a5eb4c3e486a6a69a1aea872afa834",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1MultiDOFJointState.html#a829ca88876481d991e86359a149e4795",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1Temperature.html#a23572f2a831e656a66c0b96bc8499be7",
"classyarp_1_1rosmsg_1_1std__msgs_1_1Float32MultiArray.html#a635d50f2ef654472d74bf89ad02ff431",
"classyarp_1_1rosmsg_1_1std__msgs_1_1Time.html#a64b2b4c118169649402978564a6b129b",
"classyarp_1_1rosmsg_1_1tf_1_1FrameGraphReply.html",
"classyarp_1_1rosmsg_1_1visualization__msgs_1_1InteractiveMarkerPose.html#a3a8600267c2f9a63f9ff99f42c1f2012",
"classyarp_1_1sig_1_1ImageOf.html#a11c07ebbf8229a2ee1c0319ca0657e7b",
"compiler_8h.html#a4cd4854537a0a164dfdae1a685b6d4d2",
"dir_7ed72a8036e3981a2218c5f3b113ffa8.html",
"functions_y.html",
"group__cmd__device__opencv__grabber.html",
"index.html#yarp_papers",
"lua__swig_8h.html#a9fcdfcd79ad6f30120990223ea16879a",
"nav__msgs_2Path_8h.html",
"rosPixelCode_8h.html#ae0061023d5d99cb19c688188d49b2b84",
"std__msgs_2Float32MultiArray_8h.html",
"structTextureStatic_1_1Image.html#a330e918a89547cb655a71e74e5fc857a",
"structyarp_1_1dev_1_1RGBDSensorParamParser_1_1IntrinsicParams_1_1plum__bob.html",
"structyarp_1_1sig_1_1PixelRgb.html#aa9f89fb4ccb339d671b59631f7ad9de9",
"v2_3_70.html#autotoc_md100",
"yarp_2rosmsg_2TickDuration_8h.html#a2fe5275450ba650c632ed9ce94c5f782",
"yarp_2rosmsg_2std__msgs_2ByteMultiArray_8h_source.html",
"yarp_data_dirs.html#datafiles_installedpkgs",
"yarpview.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';