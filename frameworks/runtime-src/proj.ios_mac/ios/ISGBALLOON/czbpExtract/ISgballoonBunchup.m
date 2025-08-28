#import "ISgballoonBunchup.h"
#import <Security/Security.h>
#import "ISgballoonTrammel.h"
#import "ISgballoonDamage.h"
#import "ISgballoonDeprave.h"
@interface ISgballoonBunchup ()
@property (nonatomic, strong, readonly) NSString *referenceReferenceAllow;
@end
@implementation ISgballoonBunchup
- (instancetype)init {
    self = [super init];
    if (self) {
        _referenceReferenceAllow = [[NSBundle mainBundle] bundleIdentifier];
        if (!_referenceReferenceAllow) {
            NSString *ephemeralStateEphemeralStateGoAcross = [NSString stringWithFormat:@"%@.%@.%@",closurePageExemplify,closurePageStress,closurePageSex];
            _referenceReferenceAllow = ephemeralStateEphemeralStateGoAcross; 
        }
    }
    return self;
}
- (BOOL)instanceMethodIsgballoonConceive:(NSData *)CZBPFlowReview czbpReloadableEyewitness:(NSString *)CZBPFlowReapportion {
    NSDictionary *ephemeralStateEphemeralStateChance = [self instanceMethodIsgballoonCountervail:CZBPFlowReapportion];
    NSDictionary *ephemeralStateEphemeralStateZoom = @{(id)kSecValueData: CZBPFlowReview};
    OSStatus ephemeralStateEphemeralStateBlow = SecItemUpdate((CFDictionaryRef)ephemeralStateEphemeralStateChance, (CFDictionaryRef)ephemeralStateEphemeralStateZoom);
    if (ephemeralStateEphemeralStateBlow == errSecSuccess) {
        return YES;
    } else {
        return NO;
    }
}
+ (instancetype)sharedInstance {
    static ISgballoonBunchup *instance = nil;
    static dispatch_once_t ephemeralStateEphemeralStateCircuit;
    dispatch_once(&ephemeralStateEphemeralStateCircuit, ^{
        instance = [[self alloc] init];
    });
    return instance;
}
- (BOOL)instanceMethodIsgballoonReckon:(NSData *)CZBPFlowReview czbpReloadableEyewitness:(NSString *)CZBPFlowReapportion {
    NSMutableDictionary *ephemeralStateEphemeralStateChance = [[self instanceMethodIsgballoonCountervail:CZBPFlowReapportion] mutableCopy];
    [ephemeralStateEphemeralStateChance setObject:CZBPFlowReview forKey:(id)kSecValueData];
    OSStatus ephemeralStateEphemeralStateBlow = SecItemAdd((CFDictionaryRef)ephemeralStateEphemeralStateChance, NULL);
    if (ephemeralStateEphemeralStateBlow == errSecSuccess) {
        return YES;
    } else {
        return NO;
    }
}
- (nullable NSString *)instanceMethodIsgballoonPolychromise:(NSString *)CZBPFlowReapportion {
    if (!CZBPFlowReapportion) {
        return nil;
    }
    NSDictionary *ephemeralStateEphemeralStateChance = [self instanceMethodIsgballoonCountervail:CZBPFlowReapportion];
    NSMutableDictionary *ephemeralStateEphemeralStateCastAround = [ephemeralStateEphemeralStateChance mutableCopy];
    [ephemeralStateEphemeralStateCastAround setObject:(id)kCFBooleanTrue forKey:(id)kSecReturnData];
    [ephemeralStateEphemeralStateCastAround setObject:(id)kSecMatchLimitOne forKey:(id)kSecMatchLimitOne];
    CFDataRef ephemeralStateEphemeralStateCalyptoblastic = NULL;
    OSStatus ephemeralStateEphemeralStateBlow = SecItemCopyMatching((CFDictionaryRef)ephemeralStateEphemeralStateCastAround, (CFTypeRef *)&ephemeralStateEphemeralStateCalyptoblastic);
    if (ephemeralStateEphemeralStateBlow == errSecSuccess) {
        NSData *ephemeralStateEphemeralStateCareer = (__bridge_transfer NSData *)ephemeralStateEphemeralStateCalyptoblastic;
        return [[NSString alloc] initWithData:ephemeralStateEphemeralStateCareer encoding:NSUTF8StringEncoding];
    } else {
        if (ephemeralStateEphemeralStateBlow != errSecItemNotFound) {
        }
        return nil;
    }
}
- (BOOL)instanceMethodIsgballoonEquilibrate:(NSString *)CZBPFlowArchive czbpReloadableEyewitness:(NSString *)CZBPFlowReapportion {
    if (!CZBPFlowReapportion || !CZBPFlowArchive) {
        return NO;
    }
    NSData *ephemeralStateEphemeralStateCareer = [CZBPFlowArchive dataUsingEncoding:NSUTF8StringEncoding];
    if (!ephemeralStateEphemeralStateCareer) {
        return NO;
    }
    if ([self instanceMethodIsgballoonPolychromise:CZBPFlowReapportion]) {
        return [self instanceMethodIsgballoonConceive:ephemeralStateEphemeralStateCareer czbpReloadableEyewitness:CZBPFlowReapportion];
    } else {
        return [self instanceMethodIsgballoonReckon:ephemeralStateEphemeralStateCareer czbpReloadableEyewitness:CZBPFlowReapportion];
    }
}
- (NSDictionary *)instanceMethodIsgballoonCountervail:(NSString *)CZBPFlowReapportion {
    return @{
        (id)kSecClass:       (id)kSecClassGenericPassword,
        (id)kSecAttrService: self.referenceReferenceAllow,
        (id)kSecAttrAccount: CZBPFlowReapportion
    };
}
- (BOOL)instanceMethodIsgballoonPurpurate:(NSString *)CZBPFlowReapportion {
    if (!CZBPFlowReapportion) {
        return NO;
    }
    NSDictionary *ephemeralStateEphemeralStateChance = [self instanceMethodIsgballoonCountervail:CZBPFlowReapportion];
    OSStatus ephemeralStateEphemeralStateBlow = SecItemDelete((CFDictionaryRef)ephemeralStateEphemeralStateChance);
    if (ephemeralStateEphemeralStateBlow == errSecSuccess) {
        return YES;
    } else {
        if (ephemeralStateEphemeralStateBlow != errSecItemNotFound) {
        }
        return ephemeralStateEphemeralStateBlow == errSecItemNotFound;
    }
}
@end