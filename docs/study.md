# Streaming Protocols Comparison

| Protocol | Latency | Firewall Friendly | Adaptive Bitrate | Platform Support | Use Case |
|----------|---------|-------------------|------------------|------------------|----------|
| RTMP     | Low     | No                | No               | Flash, Custom Players | Traditional live streaming |
| HLS      | High    | Yes               | Yes              | Wide (iOS, Android, Web) | VOD, Live streaming |
| DASH     | Medium  | Yes               | Yes              | Wide (Android, Web) | VOD, Live streaming |
| WebRTC   | Very Low| Varies            | No               | Modern Browsers | Video chat, P2P streaming |
| SRT      | Low     | Configurable      | No               | Professional Broadcast | High-quality live streaming |
| CMAF     | Low     | Yes               | Yes              | Growing           | Unified streaming format |

## Protocol Selection for VodaMark

For the initial implementation of VodaMark, we will focus on RTMP for ingestion and HLS for playback. This combination provides:

1. Wide compatibility with existing streaming software (OBS, StreamLabs, etc.) for content creators
2. Broad playback support across devices and platforms
3. Ability to implement adaptive bitrate streaming for better user experience

As the project evolves, we will consider implementing additional protocols, particularly WebRTC for low-latency use cases and CMAF for more efficient delivery.
