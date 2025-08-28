
#ifndef ISgballoonTrammel_h
#define ISgballoonTrammel_h
#ifdef DEBUG
#define NSLog(format, ...) do {\
fprintf(stderr, "\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n%s: line(%d):\n", \
__PRETTY_FUNCTION__, __LINE__); \
printf("%s\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n\n", \
[NSString stringWithFormat:format, ##__VA_ARGS__].UTF8String);\
} while(0);
#else
#define NSLog(...)
#endif
#ifndef iSpecifyCZBPRetreat
#if DEBUG
#if __has_feature(objc_arc)
#define iSpecifyCZBPRetreat(object) autoreleasepool{} __weak __typeof__(object) weak##_##object = object;
#else
#define iSpecifyCZBPRetreat(object) autoreleasepool{} __block __typeof__(object) block##_##object = object;
#endif
#else
#if __has_feature(objc_arc)
#define iSpecifyCZBPRetreat(object) try{} @finally{} {} __weak __typeof__(object) weak##_##object = object;
#else
#define iSpecifyCZBPRetreat(object) try{} @finally{} {} __block __typeof__(object) block##_##object = object;
#endif
#endif
#endif
#ifndef iSpecifyCZBPCannonballAlong
#if DEBUG
#if __has_feature(objc_arc)
#define iSpecifyCZBPCannonballAlong(object) autoreleasepool{} __typeof__(object) object = weak##_##object;
#else
#define iSpecifyCZBPCannonballAlong(object) autoreleasepool{} __typeof__(object) object = block##_##object;
#endif
#else
#if __has_feature(objc_arc)
#define iSpecifyCZBPCannonballAlong(object) try{} @finally{} __typeof__(object) object = weak##_##object;
#else
#define iSpecifyCZBPCannonballAlong(object) try{} @finally{} __typeof__(object) object = block##_##object;
#endif
#endif
#endif
#endif 
