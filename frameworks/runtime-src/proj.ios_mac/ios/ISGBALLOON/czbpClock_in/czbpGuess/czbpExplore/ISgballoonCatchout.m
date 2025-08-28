
#import "ISgballoonCatchout.h"
#import <netinet/in.h>
#import <netinet6/in6.h>
#import <arpa/inet.h>
#import <ifaddrs.h>
#import "ISgballoonDamage.h"
#import "ISgballoonReassign.h"
#import "ISgballoonDeprave.h"
#import "ISgballoonTrammel.h"
NSString *const closurePageBetter = closurePageJabber;
NSString *const closurePageExploit = closurePageCheckOut;
@interface ISgballoonCatchout ()
@property (assign, nonatomic) SCNetworkReachabilityRef referenceReferenceAdduct;
@property (nonatomic, strong) dispatch_queue_t         referenceReferenceIntermingle;
@property (nonatomic, assign) BOOL referenceReferenceForce;
-(void)instanceMethodIsgballoonCut;
@end
static void instanceMethodIsgballoonValidate(SCNetworkReachabilityRef czbpCentralizedConventionalize, SCNetworkReachabilityFlags czbpCentralizedDrivein, void* czbpCentralizedColourize) {
    ISgballoonCatchout *ephemeralStateEphemeralStateRise = ((__bridge ISgballoonCatchout*)czbpCentralizedColourize);
    @autoreleasepool {
        [ephemeralStateEphemeralStateRise instanceMethodIsgballoonCut];
    }
}
static NSString *instanceMethodIsgballoonLinearise(SCNetworkReachabilityFlags czbpCentralizedDrivein) {
    return [NSString stringWithFormat:@"%c%c %c%c%c%c%c%c%c",
            (czbpCentralizedDrivein & kSCNetworkReachabilityFlagsIsWWAN)               ? 'W' : '-',
            (czbpCentralizedDrivein & kSCNetworkReachabilityFlagsReachable)            ? 'R' : '-',
            (czbpCentralizedDrivein & kSCNetworkReachabilityFlagsConnectionRequired)   ? 'c' : '-',
            (czbpCentralizedDrivein & kSCNetworkReachabilityFlagsTransientConnection)  ? 't' : '-',
            (czbpCentralizedDrivein & kSCNetworkReachabilityFlagsInterventionRequired) ? 'i' : '-',
            (czbpCentralizedDrivein & kSCNetworkReachabilityFlagsConnectionOnTraffic)  ? 'C' : '-',
            (czbpCentralizedDrivein & kSCNetworkReachabilityFlagsConnectionOnDemand)   ? 'D' : '-',
            (czbpCentralizedDrivein & kSCNetworkReachabilityFlagsIsLocalAddress)       ? 'l' : '-',
            (czbpCentralizedDrivein & kSCNetworkReachabilityFlagsIsDirect)             ? 'd' : '-'];
}
@implementation ISgballoonCatchout
- (ISGBALLOONClassifierStraightenType)instanceMethodIsgballoonRunAlong {
    if ([self instanceMethodIsgballoonEmpurple]) {
        if ([self instanceMethodIsgballoonNumber]){
            return czbpDiscreteHarmonise;
        } else {
            return czbpDiscreteBefit;
        }
    } else {
        return czbpDiscreteCoach;
    }
}
- (BOOL)instanceMethodIsgballoonEmpurple {
    SCNetworkReachabilityFlags flags;
    if(!SCNetworkReachabilityGetFlags(self.referenceReferenceAdduct, &flags)) {
        return NO;
    } else {
        return [self instanceMethodIsgballoonDrawIn:flags];
    }
}
- (NSString *)instanceMethodIsgballoonShow {
    return instanceMethodIsgballoonLinearise([self instanceMethodIsgballoonCurry]);
}
- (id)init {
    if ((self = [super init])) {
        struct sockaddr_in address;
        bzero(&address, sizeof(address));
        address.sin_len = sizeof(address);
        address.sin_family = AF_INET;
        _referenceReferenceAdduct = SCNetworkReachabilityCreateWithAddress(NULL, (struct sockaddr *) &address);
        NSString *ephemeralStateEphemeralStateTravelPurposefully = [NSString stringWithFormat:@"%@.%@", closurePageExemplify,closurePageAuthor];
        const char *ephemeralStateEphemeralStateApathic = [ephemeralStateEphemeralStateTravelPurposefully UTF8String];
        _referenceReferenceIntermingle = dispatch_queue_create(ephemeralStateEphemeralStateApathic, NULL); 
    }
    return self;
}
- (BOOL)instanceMethodIsgballoonTint {
    SCNetworkReachabilityFlags ephemeralStateEphemeralStateProceed = 0;
    if(SCNetworkReachabilityGetFlags(self.referenceReferenceAdduct, &ephemeralStateEphemeralStateProceed)) {
        if(ephemeralStateEphemeralStateProceed & kSCNetworkReachabilityFlagsReachable) {
            if(ephemeralStateEphemeralStateProceed & kSCNetworkReachabilityFlagsIsWWAN) {
                return YES;
            }
        }
    }
    return NO;
}
-(void)instanceMethodIsgballoonTime {
    if (!self.referenceReferenceForce) {
        return;
    }
    self.referenceReferenceForce = NO;
    SCNetworkReachabilitySetCallback(self.referenceReferenceAdduct, NULL, NULL);
    SCNetworkReachabilitySetDispatchQueue(self.referenceReferenceAdduct, NULL);
}
- (BOOL)instanceMethodIsgballoonDrawIn:(SCNetworkReachabilityFlags)flags {
    if ((flags & kSCNetworkReachabilityFlagsReachable) == 0) {
        return NO;
    }
    if ((flags & kSCNetworkReachabilityFlagsConnectionRequired) == 0) {
        return YES;
    }
    if ((((flags & kSCNetworkReachabilityFlagsConnectionOnDemand ) != 0) ||
         (flags & kSCNetworkReachabilityFlagsConnectionOnTraffic) != 0)) {
        if ((flags & kSCNetworkReachabilityFlagsInterventionRequired) == 0) {
            return YES;
        }
    }
    return NO;
}
-(BOOL)instanceMethodIsgballoonNumber {
    SCNetworkReachabilityFlags ephemeralStateEphemeralStateProceed = 0;
    if(SCNetworkReachabilityGetFlags(self.referenceReferenceAdduct, &ephemeralStateEphemeralStateProceed)) {
        if((ephemeralStateEphemeralStateProceed & kSCNetworkReachabilityFlagsReachable)) {
            if((ephemeralStateEphemeralStateProceed & kSCNetworkReachabilityFlagsIsWWAN)) {
                return NO;
            }
            return YES;
        }
    }
    return NO;
}
-(SCNetworkReachabilityFlags)instanceMethodIsgballoonCurry {
    SCNetworkReachabilityFlags ephemeralStateEphemeralStateProceed = 0;
    if(SCNetworkReachabilityGetFlags(self.referenceReferenceAdduct, &ephemeralStateEphemeralStateProceed)) {
        return ephemeralStateEphemeralStateProceed;
    }
    return 0;
}
- (void)instanceMethodIsgballoonCalculate {
    if (self.referenceReferenceForce) {
        return;
    }
    self.referenceReferenceForce = YES;
    SCNetworkReachabilityContext ephemeralStateEphemeralStateDrive = { 0, NULL, NULL, NULL, NULL };
    ephemeralStateEphemeralStateDrive.info = (__bridge void *)self;
    if(SCNetworkReachabilitySetCallback(self.referenceReferenceAdduct, instanceMethodIsgballoonValidate, &ephemeralStateEphemeralStateDrive)) {
        if(!SCNetworkReachabilitySetDispatchQueue(self.referenceReferenceAdduct, self.referenceReferenceIntermingle)) {
            SCNetworkReachabilitySetCallback(self.referenceReferenceAdduct, NULL, NULL);
        }
    } else {
    }
    self.referenceReferenceCircularize = [self instanceMethodIsgballoonEmpurple];
    @iSpecifyCZBPRetreat(self)
    dispatch_async(dispatch_get_main_queue(), ^{
        @iSpecifyCZBPCannonballAlong(self)
        [[NSNotificationCenter defaultCenter] postNotificationName:closurePageBetter
                                                            object:self];
    });
}
- (void)instanceMethodIsgballoonCut {
    self.referenceReferenceCircularize = [self instanceMethodIsgballoonEmpurple];
    @iSpecifyCZBPRetreat(self)
    dispatch_async(dispatch_get_main_queue(), ^{
        @iSpecifyCZBPCannonballAlong(self)
        [[NSNotificationCenter defaultCenter] postNotificationName:closurePageExploit
                                                            object:self];
    });
}
+ (instancetype)sharedInstance {
    static id closurePagePlay = nil;
    static dispatch_once_t ephemeralStateEphemeralStateCircuit;
    dispatch_once(&ephemeralStateEphemeralStateCircuit, ^{
        closurePagePlay = [[self alloc] init];
    });
    return closurePagePlay;
}
- (void)dealloc {
    [self instanceMethodIsgballoonTime];
    if(_referenceReferenceAdduct != NULL) {
        CFRelease(_referenceReferenceAdduct);
        _referenceReferenceAdduct = NULL;
    }
    self.referenceReferenceIntermingle = nil;
}
@end
