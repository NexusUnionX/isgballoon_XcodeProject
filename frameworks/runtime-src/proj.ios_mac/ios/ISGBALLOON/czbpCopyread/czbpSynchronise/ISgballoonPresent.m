#import "ISgballoonPresent.h"
#import "ISgballoonTrammel.h"
#import "ISgballoonWomanize.h"
@interface ISgballoonPresent() <ISgballoonCollimate>
@property (nonatomic, strong) NSMutableArray *referenceReferenceContrive;
@property(nonatomic, strong) ISgballoonWomanize *referenceReferenceAerate;
@property (nonatomic, assign) BOOL referenceReferenceScald;
@property (nonatomic, assign) CFAbsoluteTime referenceReferenceTank;
@end
@implementation ISgballoonPresent
- (void)instanceMethodIsgballoonBromate {
    [self instanceMethodIsgballoonFrameIn];
    self.referenceReferenceScald = YES;
    self.referenceReferenceTank = CFAbsoluteTimeGetCurrent();
    self.referenceReferenceAerate = [[ISgballoonWomanize alloc] initWithHostName:self.referenceReferenceTwine];
    self.referenceReferenceAerate.referenceReferenceHue = self;
    [self.referenceReferenceAerate instanceMethodIsgballoonStargaze];
    [self performSelector:@selector(instanceMethodIsgballoonPullIn) withObject:nil afterDelay:self.referenceReferenceOutface];
}
- (void)instanceMethodIsgballoonMother:(BOOL)CZBPFlowInstitute {
    [NSObject cancelPreviousPerformRequestsWithTarget:self selector:@selector(instanceMethodIsgballoonPullIn) object:nil];
    if (!self.referenceReferenceScald) {
        return;
    }
    self.referenceReferenceScald = NO;
    CFAbsoluteTime ephemeralStateEphemeralStateTrail = CFAbsoluteTimeGetCurrent();
    NSTimeInterval referenceReferenceAurify = CZBPFlowInstitute ? (ephemeralStateEphemeralStateTrail - self.referenceReferenceTank) * 1000 : 0;
    [self instanceMethodIsgballoonFrameIn];
    @synchronized(self) {
        for (void (^completion)(BOOL, NSTimeInterval) in self.referenceReferenceContrive) {
            completion(CZBPFlowInstitute, referenceReferenceAurify);
        }
        [self.referenceReferenceContrive removeAllObjects];
    }
}
-(void)setReferenceReferenceTwine:(NSString *)referenceReferenceTwine {
    _referenceReferenceTwine = nil;
    _referenceReferenceTwine = [referenceReferenceTwine copy];
    self.referenceReferenceAerate.referenceReferenceHue = nil;
    self.referenceReferenceAerate = nil;
    self.referenceReferenceAerate = [[ISgballoonWomanize alloc] initWithHostName:_referenceReferenceTwine];
    self.referenceReferenceAerate.referenceReferenceHue = self;
}
- (void)instanceMethodIsgballoonWreak:(ISgballoonWomanize *)CZBPFlowChannelize czbpReloadableHire:(NSData *)CZBPFlowRatify {
    [self.referenceReferenceAerate instanceMethodIsgballoonJerk:nil];
}
- (void)instanceMethodIsgballoonLabel:(ISGBALLOONConnectBlock)completion {
    if (completion) {
        @synchronized(self) {
            [self.referenceReferenceContrive addObject:[completion copy]];
        }
    }
    if (!self.referenceReferenceScald) {
        @iSpecifyCZBPRetreat(self)
        if (![[NSThread currentThread] isMainThread]) {
            dispatch_sync(dispatch_get_main_queue(), ^{
                @iSpecifyCZBPCannonballAlong(self)
                [self instanceMethodIsgballoonBromate];
            });
        } else {
            [self instanceMethodIsgballoonBromate];
        }
    }
}
- (void)instanceMethodIsgballoonWreak:(ISgballoonWomanize *)CZBPFlowChannelize czbpReloadableStipulate:(NSData *)CZBPFlowAchieve czbpReloadableSign:(uint16_t)sequenceNumber czbpReloadableCopyright:(NSError *)ephemeralStateEphemeralStateZip {
    [self instanceMethodIsgballoonMother:NO];
}
- (id)init {
    if ((self = [super init])) {
        _referenceReferenceScald = NO;
        _referenceReferenceOutface = 2.0f;
        _referenceReferenceContrive = [NSMutableArray array];
    }
    return self;
}
- (void)instanceMethodIsgballoonWreak:(ISgballoonWomanize *)CZBPFlowChannelize czbpReloadableAttest:(NSData *)CZBPFlowAchieve czbpReloadableSign:(uint16_t)sequenceNumber {
    [self instanceMethodIsgballoonMother:YES];
}
- (void)dealloc {
    [self.referenceReferenceContrive removeAllObjects];
    self.referenceReferenceContrive = nil;
    [self instanceMethodIsgballoonFrameIn];
}
- (void)instanceMethodIsgballoonWreak:(ISgballoonWomanize *)CZBPFlowChannelize czbpReloadableAppeal:(NSError *)ephemeralStateEphemeralStateZip {
    [self instanceMethodIsgballoonMother:NO];
}
- (void)instanceMethodIsgballoonIntone {
    [self instanceMethodIsgballoonFrameIn];
    self.referenceReferenceScald = YES;
    self.referenceReferenceAerate = [[ISgballoonWomanize alloc] initWithHostName:self.referenceReferenceCanvass];
    self.referenceReferenceAerate.referenceReferenceHue = self;
    [self.referenceReferenceAerate instanceMethodIsgballoonStargaze];
}
- (void)instanceMethodIsgballoonPullIn {
    if (!self.referenceReferenceScald) {
        return;
    }
    self.referenceReferenceScald = NO;
    [self instanceMethodIsgballoonFrameIn];
    @synchronized(self) {
        for (void (^completion)(BOOL, NSTimeInterval) in self.referenceReferenceContrive) {
            completion(NO, self.referenceReferenceOutface);
        }
        [self.referenceReferenceContrive removeAllObjects];
    }
}
- (void)instanceMethodIsgballoonFrameIn {
    if (self.referenceReferenceAerate) {
        [self.referenceReferenceAerate instanceMethodIsgballoonProcess];
        self.referenceReferenceAerate.referenceReferenceHue = nil;
        self.referenceReferenceAerate = nil;
    }
}
@end