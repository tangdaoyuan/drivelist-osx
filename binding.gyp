{
    "variables": {
        "openssl_fips" : "0" 
    },
    "targets": [
        {
            "target_name": "drivelist-osx",
            "conditions": [
                [
                    'OS=="mac"',
                    {
                        "xcode_settings": {
                            "OTHER_CPLUSPLUSFLAGS": [
                                "-stdlib=libc++"
                            ],
                            "OTHER_LDFLAGS": [
                                "-stdlib=libc++"
                            ]
                        },
                        "sources": [
                            "lib/drivelist.cpp",
                            "lib/device-descriptor.cpp",
                            "lib/darwin/list.mm",
                            "lib/darwin/REDiskList.m"
                        ],
                        "link_settings": {
                            "libraries": [
                                "-framework Carbon,DiskArbitration"
                            ]
                        },
                        "cflags!": ["-fno-exceptions"],
                        "cflags_cc!": ["-fno-exceptions"],
                        "xcode_settings": {
                            "GCC_ENABLE_CPP_EXCEPTIONS": "YES",
                            "CLANG_CXX_LIBRARY": "libc++",
                            "MACOSX_DEPLOYMENT_TARGET": "10.7",
                        },
                        'include_dirs': [
                            "<!@(node -p \"require('node-addon-api').include\")",
                            "."
                        ],
                        'dependencies': ["<!(node -p \"require('node-addon-api').gyp\")"],
                        "defines": [
                            "NAPI_VERSION=3",
                            "openssl_fips=''"
                        ],
                    }
                ],
            ]
        }
    ]
}
