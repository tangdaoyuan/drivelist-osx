#include <napi.h>
#include <uv.h>
#include "../drivelist.hpp"

namespace Drivelist {
  std::vector<DeviceDescriptor> ListStorageDevices() {
    std::vector<DeviceDescriptor> drivelist;
    return drivelist;
  }

}
