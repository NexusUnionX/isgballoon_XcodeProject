#import "ISgballoonTrammel.h"
#import "ISgballoonDeemphasise.h"
@interface ISgballoonDeemphasise ()<VLCMediaPlayerDelegate>
@property (nonatomic, strong) VLCMediaPlayer *referenceReferenceTrack;
@property (nonatomic, assign) BOOL referenceReferenceColourize;
@end
@implementation ISgballoonDeemphasise
 static ISgballoonDeemphasise *instance = nil;
 static dispatch_once_t ephemeralStateEphemeralStateCircuit;
+ (instancetype)sharedInstance{
     dispatch_once(&ephemeralStateEphemeralStateCircuit, ^{
         instance = [[super allocWithZone:NULL] init];
         [instance instanceMethodIsgballoonCanvass];
     });
     return instance;
 }
 + (instancetype)allocWithZone:(struct _NSZone *)zone{
     return [self sharedInstance];
 }
 - (id)copyWithZone:(nullable NSZone *)zone {
     return self;
 }
 - (instancetype)mutableCopyWithZone:(NSZone *)zone {
     return self;
 }
 + (void)instanceMethodIsgballoonProvoke {
     instance = nil;
     ephemeralStateEphemeralStateCircuit = 0;
 }
- (instancetype)init {
    self = [super init];
    if (self) {
        [self instanceMethodIsgballoonCanvass];
    }
    return self;
}
- (void)instanceMethodIsgballoonFilmMake:(NSNotification *)aNotification {
    if (self.referenceReferenceHue && [self.referenceReferenceHue respondsToSelector:@selector(instanceMethodIsgballoonGrave:)]) {
        [self.referenceReferenceHue instanceMethodIsgballoonGrave:self.referenceReferenceTrack.time];
    }
}
- (VLCMediaPlayerState)referenceReferenceAppease {
    return self.referenceReferenceTrack.state;
}
- (void)instanceMethodIsgballoonCanvass {
    _referenceReferenceTrack = [[VLCMediaPlayer alloc] init];
    _referenceReferenceTrack.delegate = self; 
    _referenceReferenceTrack.drawable = nil;
    [self instanceMethodIsgballoonPiece];
}
- (void)instanceMethodIsgballoonDistill:(NSNotification *)noti {
}
- (void)instanceMethodIsgballoonPiece {
}
- (void)instanceMethodIsgballoonColorize:(NSNotification *)aNotification {
    VLCMediaPlayerState referenceReferenceAppease = self.referenceReferenceTrack.state;
    if (referenceReferenceAppease == VLCMediaPlayerStateEnded && self.referenceReferenceColourize) {
        [self.referenceReferenceTrack play];
    }
    if (self.referenceReferenceHue && [self.referenceReferenceHue respondsToSelector:@selector(instanceMethodIsgballoonPullBack:)]) {
        [self.referenceReferenceHue instanceMethodIsgballoonPullBack:self.referenceReferenceTrack.state];
    }
}
- (void)instanceMethodIsgballoonEmbrown {
    if (self.referenceReferenceTrack.isPlaying) {
        [self.referenceReferenceTrack pause];
    }
}
- (void)instanceMethodIsgballoonTrim {
    if (self.referenceReferenceTrack.isPlaying) {
        [self.referenceReferenceTrack stop];
    }
}
- (void)instanceMethodIsgballoonIntermix:(NSURL *)CZBPFlowGrade czbpReloadableCharter:(BOOL)CZBPFlowSettledown {
    if (!CZBPFlowGrade) {
        return;
    }
    self.referenceReferenceColourize = CZBPFlowSettledown;
    VLCMedia *ephemeralStateEphemeralStateSail = [VLCMedia mediaWithURL:CZBPFlowGrade];
    self.referenceReferenceTrack.media = ephemeralStateEphemeralStateSail;
    [self.referenceReferenceTrack play];
}
- (void)instanceMethodIsgballoonInvoke {
    [self.referenceReferenceTrack play];
}
- (void)dealloc {
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}
- (BOOL)referenceReferenceOrganise {
    return self.referenceReferenceTrack.isPlaying;
}
- (void)instanceMethodIsgballoonBodypaint {
}
@end