cmd_Release/recognizer.node := ./gyp-mac-tool flock ./Release/linker.lock c++ -bundle -Wl,-search_paths_first -mmacosx-version-min=10.5 -arch x86_64 -L./Release  -o Release/recognizer.node Release/obj.target/recognizer/recognizer.o -undefined dynamic_lookup ../../../mathreco/lib/libmathreco.a
